import { rdbClient } from "@loaders/database.loader";
import ToDo from "@my-rdb/entities/todo.entity";

export const ToDoRepository = rdbClient.getRepository(ToDo);
