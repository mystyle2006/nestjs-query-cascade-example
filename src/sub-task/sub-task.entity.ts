import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ID, InputType, ObjectType } from '@nestjs/graphql';
import { TodoItemEntity } from '../todo-item/todo-item.entity';
import { FilterableField, IDField } from '@nestjs-query/query-graphql';

@Entity()
@ObjectType('SubTask')
@InputType('SubTaskEntityInputType')
export class SubTaskEntity {
  @IDField(() => ID, { nullable: true })
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  todoItemId: number;

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

  @ManyToOne(() => TodoItemEntity)
  @JoinColumn({ name: 'todoItemId' })
  todoItem: TodoItemEntity;
}
