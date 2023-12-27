import { infoService } from "@loaders/service.loader";
import { RequestHandler } from "express";

/**
 * @description 서버 정보 체크하는 컨트롤러
 */
export const checkServerInfoController: RequestHandler = (_req, res) => {
  const response = infoService.info();

  res.result(response);
};
