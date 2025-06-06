export const ASSETS_PATH = '/assets';
export const DPR = Math.min(2, window.devicePixelRatio || 1);
const USE_PIXEL_LIMIT = true;
export const MAX_PIXEL_COUNT = 2560 * 1440;
const FREE_BLOCKS_COUNT = 12;
const AUTO_RESTART = true;
const AUTO_START = false;
const SHOW_BLOCK = false;
const DEFAULT_POSITION = [-20, 18, 20];
const DEFAULT_LOOKAT_POSITION = [0, 0, 0];
export const WEBGL_OPTS = { antialias: true, alpha: false, powerPreference: 'low-power' as WebGLPowerPreference };

const settings = {
	DPR,
	USE_PIXEL_LIMIT,
	MAX_PIXEL_COUNT,
	DEFAULT_POSITION,
	DEFAULT_LOOKAT_POSITION,
	FREE_BLOCKS_COUNT,
	AUTO_RESTART,
	AUTO_START,
	SHOW_BLOCK,
};
export default settings;
