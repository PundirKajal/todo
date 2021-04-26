import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import TaskEntity from '../../model/task.entity';
import { Repository } from 'typeorm';
import { TaskDto } from '../../dto/task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity) private readonly repo: Repository<TaskEntity>,
  ) {}

  /**
   * async getAll
   */
  public async getAll(): Promise<TaskDto[]> {
    return this.repo
      .find()
      .then((tasks) => tasks.map((e) => TaskDto.fromEntity(e)));
  }

  /**
   * async addTask
   */
  public async addTask(task: TaskDto): Promise<TaskDto> {
    return this.repo.save(task).then((data) => TaskDto.fromEntity(data));
  }
}
