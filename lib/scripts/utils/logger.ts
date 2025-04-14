// Add tower prefix to logs

const getTowerLogPrefix = (level) => `tari-tower ${level} | `;

function logError(...args) {
	return console.error(getTowerLogPrefix('error'), ...args);
}

function logInfo(...args) {
	return console.info(getTowerLogPrefix('info'), ...args);
}

function logWarn(...args) {
	return console.warn(getTowerLogPrefix('warn'), ...args);
}

function logDebug(...args) {
	return console.debug(getTowerLogPrefix('debug'), ...args);
}

function log(...args) {
	return console.log(getTowerLogPrefix('log'), ...args);
}

export { logError, logInfo, logWarn, logDebug, log, getTowerLogPrefix };
