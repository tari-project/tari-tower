import * as THREE from 'three';
import { properties } from './properties';

import BASE from '/assets/BASE.buf?inline';
import BOX from '/assets/BOX.buf?inline';
import COIN from '/assets/COIN.buf?inline';
import COIN_PLACEMENT from '/assets/COIN_PLACEMENT.buf?inline';
import LOSE_ANIMATION from '/assets/LOSE_ANIMATION.buf?inline';

import gobo from '/assets/gobo.jpg?url';
import LDR_RGB1_0 from '/assets/LDR_RGB1_0.png?url';
import matcap_gold from '/assets/matcap_gold.jpg?url';

interface LoaderItems {
	list: (() => void | Promise<void>)[];
	loadedCount: number;
	onLoadCallback: (() => void) | null;
}

const assets = {
	'models/BASE.buf': BASE,
	'models/BOX.buf': BOX,
	'models/COIN.buf': COIN,
	'models/COIN_PLACEMENT.buf': COIN_PLACEMENT,
	'models/LOSE_ANIMATION.buf': LOSE_ANIMATION,
	'textures/gobo.jpg': gobo,
	'textures/LDR_RGB1_0.png': LDR_RGB1_0,
	'textures/matcap_gold.jpg': matcap_gold,
};
const Loader = () => {
	let list: LoaderItems['list'] = [];
	let loadedCount: LoaderItems['loadedCount'] = 0;
	let onLoadCallback: LoaderItems['onLoadCallback'] = null;

	function loadBuf(filename, cb) {
		console.debug(filename);
		const url = assets[filename];
		console.debug(url);
		list.push(async () => {
			try {
				const response = await fetch(url);
				console.debug(response);
				const buffer = await response.arrayBuffer();
				const schematicJsonSize = new Uint32Array(buffer, 0, 1)[0];
				const schematic = JSON.parse(new TextDecoder().decode(new Uint8Array(buffer, 4, schematicJsonSize)));

				const { vertexCount, indexCount, attributes: schematicAttributeList } = schematic;
				let offset = 4 + schematicJsonSize;

				const geometry = new THREE.BufferGeometry();
				const offsetMap = {};

				schematicAttributeList.forEach((schematicAttribute) => {
					const { id, componentSize, storageType, needsPack, packedComponents } = schematicAttribute;
					const dataLength = id === 'indices' ? indexCount : vertexCount;
					const StorageType = window[storageType as string];
					const tmpArr = new StorageType(buffer, offset, dataLength * componentSize);
					const byteSize = StorageType.BYTES_PER_ELEMENT;

					let outArr;
					if (needsPack) {
						outArr = _packAttribute(tmpArr, dataLength, componentSize, packedComponents, storageType);
					} else {
						offsetMap[id] = offset;
						outArr = tmpArr;
					}

					if (id === 'indices') {
						geometry.setIndex(new THREE.BufferAttribute(outArr, 1));
					} else {
						geometry.setAttribute(id, new THREE.BufferAttribute(outArr, componentSize));
					}

					offset += dataLength * componentSize * byteSize;
				});

				if (cb) cb(geometry);
				_onLoad();
			} catch (error) {
				console.error('Error loading buffer:', error);
			}
		});
	}

	function _packAttribute(tmpArr, dataLength, componentSize, packedComponents, storageType) {
		const packedComponentCount = packedComponents.length;
		const isSign = storageType.indexOf('Int') === 0;
		const size = 1 << (tmpArr.BYTES_PER_ELEMENT * 8);
		const offset = isSign ? size * 0.5 : 0;
		const divider = 1 / size;

		const outArr = new Float32Array(dataLength * componentSize);
		for (let j = 0, jk = 0; j < dataLength; j++) {
			for (let k = 0; k < packedComponentCount; k++) {
				const { delta, from } = packedComponents[k];
				outArr[jk] = (tmpArr[jk] + offset) * divider * delta + from;
				jk++;
			}
		}
		return outArr;
	}

	function loadTexture(filename, cb) {
		console.debug(`filename= ${filename}`);
		const url = assets[filename];
		console.debug(url);
		list.push(() => {
			new THREE.TextureLoader().load(
				url,
				(texture) => {
					texture.minFilter = THREE.LinearMipMapLinearFilter;
					texture.magFilter = THREE.LinearFilter;
					texture.generateMipmaps = true;
					texture.anisotropy = properties.renderer?.capabilities.getMaxAnisotropy() || 1;
					texture.flipY = true;
					if (cb) cb(texture);
					_onLoad();
				},
				undefined,
				(error) => console.error('Error loading texture:', error),
			);
		});
	}

	function start(cb) {
		loadedCount = 0;
		onLoadCallback = cb;
		list.forEach((loadFunction) => loadFunction());
	}

	function _onLoad() {
		loadedCount++;
		if (loadedCount === list.length) {
			list = [];
			if (onLoadCallback) {
				onLoadCallback();
			}
		}
	}

	return {
		loadBuf,
		loadTexture,
		start,
		list,
		loadedCount,
		onLoadCallback,
	};
};

const loader = Loader();
export default loader;
