import CheckInfoParamDTO from "@dto/params/check-info.param.dto";
import { RequestDTOHandler } from "@my-types/express.type";
import { ICheckInfoParam } from "@my-types/params/check-info.param.type";
import joi from "joi";

export const checkInfoSchema = joi.object<ICheckInfoParam>().keys({
  name: joi.boolean(),
  memory: joi.boolean(),
  uptime: joi.boolean(),
});

export const checkInfoValidator: RequestDTOHandler<CheckInfoParamDTO> = async (req, res, next) => {
  const params = await checkInfoSchema.validateAsync(req.query);

  res.locals.requestDTO = new CheckInfoParamDTO(params);

  next();
};
