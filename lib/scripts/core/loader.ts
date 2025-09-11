import { BufferAttribute, BufferGeometry, LinearFilter, LinearMipMapLinearFilter, TextureLoader } from 'three';
import { logError } from '../utils/logger';

import buf_base from 'public/assets/buf_base.buf?url&inline';
import buf_box from 'public/assets/buf_box.buf?url&inline';
import buf_coin from 'public/assets/buf_coin.buf?url&inline';
import buf_coin_p from 'public/assets/buf_coin_p.buf?url&inline';
import buf_lose from 'public/assets/buf_lose.buf?url&inline';

import gobo from 'public/assets/gobo.jpg';
import noise from 'public/assets/noise.png';
import gold from 'public/assets/gold.jpg';

interface LoaderItems {
	list: (() => void | Promise<void>)[];
	loadedCount: number;
	onLoadCallback: (() => void) | null;
}

const Loader = () => {
	const assets = { buf_base, buf_box, buf_coin, buf_coin_p, buf_lose, gobo, noise, gold };
	let list: LoaderItems['list'] = [];
	let loadedCount: LoaderItems['loadedCount'] = 0;
	let onLoadCallback: LoaderItems['onLoadCallback'] = null;

	async function loadBuf(assetName, cb) {
		const url = assets[assetName];

		list.push(async () => {
			let attempts = 0;
			const maxAttempts = 3;

			while (attempts < maxAttempts) {
				try {
					const response = await fetch(url);

					const buffer = await response.arrayBuffer();
					const schematicJsonSize = new Uint32Array(buffer, 0, 1)[0];
					const schematic = JSON.parse(new TextDecoder().decode(new Uint8Array(buffer, 4, schematicJsonSize)));

					const { vertexCount, indexCount, attributes: schematicAttributeList } = schematic;
					let offset = 4 + schematicJsonSize;

					const geometry = new BufferGeometry();
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
							geometry.setIndex(new BufferAttribute(outArr, 1));
						} else {
							geometry.setAttribute(id, new BufferAttribute(outArr, componentSize));
						}

						offset += dataLength * componentSize * byteSize;
					});

					geometry.name = assetName;

					if (cb) cb(geometry);
					_onLoad();

					break;
				} catch (error) {
					attempts++;
					if (attempts >= maxAttempts) {
						logError(`Failed to load buffer: ${assetName} after ${maxAttempts} attempts`, error);
					} else {
						logError(`Failed to load buffer: ${assetName}, attempt ${attempts}/${maxAttempts}, retrying...`, error);
						await new Promise((resolve) => setTimeout(resolve, 100));
					}
				}
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

	async function loadTexture(assetName, cb) {
		const url = assets[assetName];

		list.push(() => {
			new TextureLoader().load(
				url,
				(texture) => {
					texture.name = assetName;
					texture.minFilter = LinearMipMapLinearFilter;
					texture.magFilter = LinearFilter;
					texture.generateMipmaps = true;
					texture.anisotropy = 1;
					texture.flipY = true;
					cb?.(texture);
				},
				undefined,
				(error) => logError(`Failed to load texture: ${assetName}`, error),
			);
		});
	}

	async function start(cb) {
		for (const loadFunction of list) {
			await loadFunction();
		}
		loadedCount = 0;
		onLoadCallback = cb;
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
	};
};

const loader = Loader();
export default loader;
