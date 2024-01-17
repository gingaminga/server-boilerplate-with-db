import ToDo from "@my-rdb/entities/to-do.entity";
import { ToDoRepository } from "@my-rdb/repositories/to-do.repository";
import { injectable } from "inversify";

export interface IToDoService {
  getAll(): Promise<ToDo[]>;
}

@injectable()
export class ToDoService implements IToDoService {
  private toDoRepository;

  constructor() {
    this.toDoRepository = ToDoRepository;
  }

  /**
   * @description 전체 할 일 가져오기
   */
  async getAll() {
    const data = await this.toDoRepository.find();
    return data;
  }
}
