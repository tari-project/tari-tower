import { WebGLRendererParameters } from 'three';
export const WEBGL_OPTS: WebGLRendererParameters = { antialias: true, powerPreference: 'low-power', precision: 'lowp', failIfMajorPerformanceCaveat: true };

const AUTO_RESTART = true;
const AUTO_START = false;
const SHOW_BLOCK = true;
const DEFAULT_LOOKAT_POSITION = [0, 0, 0];
const DEFAULT_POSITION = [-20, 18, 20];
const DPR = Math.min(2, window.devicePixelRatio || 1);
const MAX_PIXEL_COUNT = 2560 * 1440;
const USE_PIXEL_LIMIT = true;

const settings = { AUTO_RESTART, AUTO_START, DEFAULT_LOOKAT_POSITION, DEFAULT_POSITION, DPR, MAX_PIXEL_COUNT, SHOW_BLOCK, USE_PIXEL_LIMIT };

export default settings;
