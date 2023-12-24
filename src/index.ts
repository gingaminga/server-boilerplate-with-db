import "@utils/env";

import app from "@app";
import { PROJECT } from "@utils/constants";
import http from "http";

const { PORT } = PROJECT;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Start service on ${PORT} port!`);
});
