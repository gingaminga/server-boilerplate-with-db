import container from "@config/inversify.config";
import { ToDoRepository } from "@my-rdb/repositories/to-do.repository";
import INVERSIFY_TYPES from "@utils/inversify-type";

export const toDoRepository = container.get<typeof ToDoRepository>(INVERSIFY_TYPES.ToDoRepository);
