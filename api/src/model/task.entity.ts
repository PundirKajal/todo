import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  BaseEntity,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export default class TaskEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: true })
  description: string;
  /**
   * type of task, like daily, today.
   */
  @Column({ nullable: false, default: 'today' })
  type: string;
  /**
   * TBD
   */
  @Column({ nullable: true })
  remindAt: string;

  @CreateDateColumn({ nullable: false })
  createdAt: Date;

  @CreateDateColumn({ nullable: false })
  updatedAt: Date;

  //TODO
  /*     @Field(type => User)
    @ManyToOne(type => User, user => user.tasks)
    user: User; */
}
