import * as THREE from 'three';

import BASE from 'public/assets/BASE.buf?url&inline';
import BOX from 'public/assets/BOX.buf?url&inline';
import COIN from 'public/assets/COIN.buf?url&inline';
import COIN_PLACEMENT from 'public/assets/COIN_PLACEMENT.buf?url&inline';
import LOSE_ANIMATION from 'public/assets/LOSE_ANIMATION.buf?url&inline';

import gobo from 'public/assets/gobo.jpg';
import LDR_RGB1_0 from 'public/assets/LDR_RGB1_0.png';
import matcap_gold from 'public/assets/matcap_gold.jpg';

interface LoaderItems {
	list: (() => void | Promise<void>)[];
	loadedCount: number;
	onLoadCallback: (() => void) | null;
}

const Loader = () => {
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
	let list: LoaderItems['list'] = [];
	let loadedCount: LoaderItems['loadedCount'] = 0;
	let onLoadCallback: LoaderItems['onLoadCallback'] = null;

	function loadBuf(file, cb) {
		const url = assets[file];
		list.push(async () => {
			try {
				const response = await fetch(url);
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

	function loadTexture(file, cb) {
		const url = assets[file];
		list.push(() => {
			new THREE.TextureLoader().load(
				url,
				(texture) => {
					texture.minFilter = THREE.LinearMipMapLinearFilter;
					texture.magFilter = THREE.LinearFilter;
					texture.generateMipmaps = true;
					texture.anisotropy = 1;
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
			onLoadCallback?.();
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
