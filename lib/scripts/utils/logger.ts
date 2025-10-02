// Add tower prefix to logs
const v = import.meta.env.VITE_TARI_TOWER_VERSION;
const getTowerLogPrefix = (level) => `🟪 TOWER_${v}${level === 'warn' || level === 'error' ? ` ${level.toUpperCase()}` : ''}`;
const logError = (...args) => console.error(getTowerLogPrefix('error'), ...args);
const logInfo = (...args) => console.info(getTowerLogPrefix('info'), ...args);
const logWarn = (...args) => console.warn(getTowerLogPrefix('warn'), ...args);
const log = (...args) => console.log(getTowerLogPrefix('log'), ...args);

export { logError, logInfo, logWarn, log, getTowerLogPrefix };
