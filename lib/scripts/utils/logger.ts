// Override console functions

const originalConsole = {
  log: console.log,
  error: console.error,
  info: console.info,
  warn: console.warn,
  debug: console.debug,
};

const getOptions = (args, level) => {
  const message = `%c tari-tower ${level} | `;

  return originalConsole[level](
    message,
    "font-weight:900; font-size:12px",
    ...args
  );
};

const setupLogger = () => {
  // Override
  console.log = (...args) => getOptions(args, "log");
  console.info = (...args) => getOptions(args, "info");
  console.error = (...args) => getOptions(args, "error");
  console.warn = (...args) => getOptions(args, "warn");
  console.debug = (...args) => getOptions(args, "debug");
};

export default setupLogger;
