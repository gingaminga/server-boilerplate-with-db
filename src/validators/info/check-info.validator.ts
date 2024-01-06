import { RequestDTOHandler } from "@@types/express.type";
import { ICheckInfoParam } from "@@types/params/check-info.param.type";
import CheckInfoParamDTO from "@dto/params/check-info.param.dto";
import joi from "joi";

const checkInfoSchema = joi.object<ICheckInfoParam>().keys({
  name: joi.boolean(),
  memory: joi.boolean(),
  uptime: joi.boolean(),
});

export const checkInfoValidator: RequestDTOHandler<CheckInfoParamDTO> = async (req, res, next) => {
  const params = await checkInfoSchema.validateAsync(req.query);

  res.locals.dto = new CheckInfoParamDTO(params);

  next();
};
