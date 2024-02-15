import { ToDoRepository } from "@my-rdb/repositories/to-do.repository";
import RedisClient from "@my-redis/client";
import { InfoService } from "@services/info.service";
import { ToDoService } from "@services/to-do.service";
import INVERSIFY_TYPES from "@utils/invesify-type";
import { Container } from "inversify";

const container = new Container();

// service
container.bind<InfoService>(INVERSIFY_TYPES.InfoService).to(InfoService).inSingletonScope();
container.bind<ToDoService>(INVERSIFY_TYPES.ToDoService).to(ToDoService).inSingletonScope();

// repository
container.bind<typeof ToDoRepository>(INVERSIFY_TYPES.ToDoRepository).toConstantValue(ToDoRepository);

// db
container.bind<RedisClient>(INVERSIFY_TYPES.RedisClient).toConstantValue(new RedisClient());

export default container;
