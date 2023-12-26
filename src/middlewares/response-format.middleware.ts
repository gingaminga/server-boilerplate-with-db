import { HTTP_STATUS_CODE } from "@utils/constants";
import CError from "@utils/error";
import { getResponseFormat } from "@utils/format";
import logger from "@utils/logger";
import { NextFunction, Request, Response } from "express";

/**
 * @description 커스텀 응답 함수를 정의하는 미들웨어
 */
export default (req: Request, res: Response, next: NextFunction) => {
  res.result = (data) => {
    let code = HTTP_STATUS_CODE.OK;

    switch (req.method) {
      case "POST":
      case "PUT": {
        code = HTTP_STATUS_CODE.CREATED;
        break;
      }
      default: {
        break;
      }
    }

    res.status(code).json(getResponseFormat(true, data));
  };

  res.error = (error) => {
    const { code, message, stack } = new CError(error);
    logger.error(stack);

    res.status(code).json(getResponseFormat(false, message));
  };

  next();
};
