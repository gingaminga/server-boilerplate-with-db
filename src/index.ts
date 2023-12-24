import "@utils/env";

import app from "@app";
import { PROJECT_SETTING } from "@utils/constants";
import http from "http";

const { PORT } = PROJECT_SETTING;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Start service on ${PORT} port!`);
});
