import "@utils/env";
import "reflect-metadata";

import app from "@app";
import getServer from "@server";
import { PROJECT } from "@utils/constants";
import logger from "@utils/logger";

const { PORT } = PROJECT;

const server = getServer(app);

server.listen(PORT, () => {
  logger.info(`Start service on ${PORT} port!`);
});
