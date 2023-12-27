import InfoDTO from "@dto/info.dto";
import { injectable } from "inversify";
import os from "os";

export interface IInfoService {
  info(): InfoDTO;
}

@injectable()
export class InfoService implements IInfoService {
  hostName = os.hostname();

  type = os.type();

  version = os.release();

  info() {
    const freeMemory = os.freemem();
    const totalMemory = os.totalmem();
    const uptime = os.uptime();

    return new InfoDTO(this.hostName, this.type, this.version, totalMemory, freeMemory, uptime);
  }
}
