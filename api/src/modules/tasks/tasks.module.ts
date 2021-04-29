import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import TaskEntity from '../../model/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  controllers: [TaskController],
  providers: [TasksService],
})
export class TasksModule {}
