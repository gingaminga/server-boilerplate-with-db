import "@utils/env";
import "reflect-metadata";

import app from "@app";
import { PROJECT } from "@utils/constants";
import logger from "@utils/logger";
import getServer from "@utils/server";

const { PORT } = PROJECT;

const server = getServer(app);

server.listen(PORT, () => {
  logger.info(`Start service on ${PORT} port!`);
});
