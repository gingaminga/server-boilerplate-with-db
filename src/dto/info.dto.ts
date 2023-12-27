class InfoDTO {
  freeMemory: number;

  hostName: string;

  totalMemory: number;

  type: string;

  uptime: number;

  version: string;

  constructor(
    hostName: string,
    type: string,
    version: string,
    totalMemory: number,
    freeMemory: number,
    uptime: number,
  ) {
    this.freeMemory = freeMemory;
    this.hostName = hostName;
    this.totalMemory = totalMemory;
    this.type = type;
    this.uptime = uptime;
    this.version = version;
  }
}

export default InfoDTO;
