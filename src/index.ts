import "@utils/env";

import app from "@app";
import { PROJECT } from "@utils/constants";
import logger from "@utils/logger";
import http from "http";

const { PORT } = PROJECT;

const server = http.createServer(app);

server.listen(PORT, () => {
  logger.info(`Start service on ${PORT} port!`);
});
