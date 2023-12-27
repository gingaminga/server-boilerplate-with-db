import { InfoService } from "@services/info.service";
import INVERSIFY_TYPES from "@utils/invesify-type";
import { Container } from "inversify";

const container = new Container();

container.bind<InfoService>(INVERSIFY_TYPES.InfoService).to(InfoService).inSingletonScope();

export default container;
