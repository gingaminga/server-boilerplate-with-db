import { rdbClient } from "@loaders/database.loader";
import ToDo from "@my-rdb/entities/to-do.entity";

export const ToDoRepository = rdbClient.getRepository(ToDo);
