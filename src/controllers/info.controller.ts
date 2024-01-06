import { RequestDTOHandler } from "@@types/express.type";
import CheckInfoParamDTO from "@dto/params/check-info.param.dto";
import { infoService } from "@loaders/service.loader";

/**
 * @description 서버 정보를 확인하는 컨트롤러
 */
export const checkServerInfoController: RequestDTOHandler<CheckInfoParamDTO> = (_req, res) => {
  const { memory, name, uptime } = res.locals.dto;

  const response = infoService.info(memory, name, uptime);

  res.result(response);
};
