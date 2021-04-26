import { Controller, Get, Post, Body } from '@nestjs/common';
import { TaskDto } from '../../dto/task.dto';
import { TasksService } from './tasks.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TasksService) {}

  @Get()
  /**
   * async getAll
   */
  public async getAll(): Promise<TaskDto[]> {
    return this.taskService.getAll();
  }

  /**
   * async addTask
   */
  @Post()
  public async addTask(@Body() task: TaskDto): Promise<TaskDto> {
    console.log('add task: ', task);

    return this.taskService.addTask(task);
  }
}
