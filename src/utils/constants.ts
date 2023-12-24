export const PROJECT = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: Number(process.env.PORT || 3001), // 서버 포트
  NAME: process.env.PROJECT_NAME || "SAMPLE",
};

export const LOG = {
  LEVEL: {
    ERROR: "error",
    WARN: "warn",
    INFO: "info",
    HTTP: "http",
    VERBOSE: "verbose",
    DEBUG: "debug",
    SILLY: "silly",
  },
  MAX_COUNT: Number(process.env.LOG_MAX_COUNT || 10),
  MAX_SIZE: Number(process.env.LOG_MAX_SIZE || "10m"),
  PATH: process.env.LOG_PATH || "../../logs",
};
