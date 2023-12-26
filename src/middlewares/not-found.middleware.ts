import { HTTP_STATUS_CODE } from "@utils/constants";
import CError from "@utils/error";
import ERROR_MESSAGE from "@utils/error-message";
import { Request, Response } from "express";

/**
 * @description 404 미들웨어
 */
export default (_req: Request, res: Response) => {
  const error = new CError(ERROR_MESSAGE.NOT_FOUND, HTTP_STATUS_CODE.NOT_FOUND);

  res.error(error);
};
