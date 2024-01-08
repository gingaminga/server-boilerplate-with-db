declare namespace NodeJS {
  interface ProcessEnv {
    HTTPS: "true" | "false";
    LOG_MAX_COUNT: number;
    LOG_MAX_SIZE: string;
    LOG_PATH: string;
    NODE_ENV: "development" | "production" | "test";
    PORT: number;
    PROJECT_NAME: string;
    SSL_CA_PATH_AND_FILE: string | undefined;
    SSL_CERT_PATH_AND_FILE: string | undefined;
    SSL_KEY_PATH_AND_FILE: string | undefined;
    SSL_PFX_PATH_AND_FILE: string | undefined;
    SSL_PFX_PASSWORD: string;
    SSL_TYPE: "crt" | "pfx";
  }
}
