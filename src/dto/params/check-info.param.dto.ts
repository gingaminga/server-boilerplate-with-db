import { ICheckInfoParam } from "@my-types/params/check-info.param.type";

class CheckInfoParamDTO {
  memory?: boolean;

  name?: boolean;

  uptime?: boolean;

  constructor({ memory, name, uptime }: ICheckInfoParam) {
    this.memory = memory;
    this.name = name;
    this.uptime = uptime;
  }
}

export default CheckInfoParamDTO;
