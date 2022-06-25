import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { SubTaskEntity } from './sub-task.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([SubTaskEntity])],
      resolvers: [
        {
          DTOClass: SubTaskEntity,
          EntityClass: SubTaskEntity,
          read: { many: { disabled: true } },
          update: { disabled: true },
          create: { disabled: true },
          delete: { disabled: true },
        },
      ],
    }),
  ],
})
export class SubTaskModule {}
