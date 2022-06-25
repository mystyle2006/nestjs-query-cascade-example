import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { TodoItemEntity } from './todo-item.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],
      resolvers: [
        {
          DTOClass: TodoItemEntity,
          EntityClass: TodoItemEntity,
          read: { many: { disabled: true } },
          update: { many: { disabled: true } },
          create: { many: { disabled: true } },
          delete: { many: { disabled: true } },
        },
      ],
    }),
  ],
})
export class TodoItemModule {}
