import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { SubTaskEntity } from '../sub-task/sub-task.entity';
import { FilterableField, IDField, UnPagedRelation } from "@nestjs-query/query-graphql";

@Entity()
@ObjectType('TodoItem')
@UnPagedRelation('subTasks', () => SubTaskEntity, {
  nullable: true,
  allowFiltering: true,
  disableUpdate: true,
  disableRemove: true,
})
@InputType('TodoItemEntityInputType')
export class TodoItemEntity {
  @IDField(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @FilterableField()
  @Column()
  title!: string;

  @FilterableField()
  @Column()
  completed!: boolean;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @Field(() => [SubTaskEntity], { nullable: true, defaultValue: [] })
  @OneToMany(() => SubTaskEntity, (subTask) => subTask.todoItem, {
    cascade: true,
  })
  subTasks: SubTaskEntity[];
}
