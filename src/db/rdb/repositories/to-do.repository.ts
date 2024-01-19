import { rdbClient } from "@loaders/database.loader";
import ToDo from "@my-rdb/entities/to-do.entity";

export const ToDoRepository = rdbClient.getRepository(ToDo).extend({
  /**
   * @description 할 일 내용 수정하기
   * @param id
   * @param content 내용
   * @returns true (수정) / false (수정 실패)
   */
  async modifyContent(id: number, content: string) {
    const result = await this.update(
      {
        id,
      },
      {
        content,
      },
    );

    if (result.affected && result.affected > 0) {
      return true;
    }

    return false;
  },
});
