import { TOTAL_TILES } from '../logic/board.ts';

export const ASSETS_PATH = '/assets';
export const ANIMATION_SPEED = 1;

export const DEFAULT_POSITION = [-20, 18, 20];
export const DEFAULT_LOOKAT_POSITION = [0, 0, 0];

export const DPR = Math.min(2, window.devicePixelRatio || 1);
export const MAX_PIXEL_COUNT = 2560 * 1440;
export const WEBGL_OPTS = { antialias: true, alpha: false, powerPreference: 'low-power' as WebGLPowerPreference };
export const MAX_FREE_BLOCKS_COUNT = TOTAL_TILES - 5;
