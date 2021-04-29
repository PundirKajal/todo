import TaskEntity from '../model/task.entity';
import { ApiProperty } from '@nestjs/swagger';

export class TaskDto implements Readonly<TaskDto> {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  remindAt: string;

  public static from(dto: Partial<TaskDto>) {
    const it = new TaskDto();
    it.id = dto.id;
    it.title = dto.title;
    it.description = dto.description;
    it.type = dto.type;
    it.remindAt = dto.remindAt;
    return it;
  }

  public static fromEntity(entity: TaskEntity) {
    return this.from({
      id: entity.id,
      title: entity.title,
      description: entity.description,
      type: entity.type,
      remindAt: entity.remindAt,
    });
  }

  public toEntity() {
    const task = new TaskEntity();
    task.id = this.id;
    task.title = this.title;
    task.type = this.type;
    task.remindAt = this.remindAt;
    task.description = this.description;
    task.createdAt = new Date();
    task.updatedAt = new Date();
    return task;
  }
}
