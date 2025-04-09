// Add tower prefix to logs

const getTowerLogPrefix = (level) => `%c tari-tower ${level} | `;
const COMMON_STYLE = 'font-weight:900; font-size:12px;';

function logError(...args) {
	return console.error(getTowerLogPrefix('error'), `${COMMON_STYLE} color:red;`, ...args);
}

function logInfo(...args) {
	return console.info(getTowerLogPrefix('info'), `${COMMON_STYLE} color:rgb(105, 139, 219);`, ...args);
}

function logWarn(...args) {
	return console.warn(getTowerLogPrefix('warn'), `${COMMON_STYLE} color:orange;`, ...args);
}

function logDebug(...args) {
	return console.debug(getTowerLogPrefix('debug'), `${COMMON_STYLE} color:green;`, ...args);
}

function log(...args) {
	return console.log(getTowerLogPrefix('log'), `${COMMON_STYLE} color:hotpink`, ...args);
}

export { logError, logInfo, logWarn, logDebug, log, getTowerLogPrefix };
