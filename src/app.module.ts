import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoItemModule } from './todo-item/todo-item.module';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver } from '@nestjs/apollo';
import { SubTaskModule } from './sub-task/sub-task.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'todo-item-db',
      username: 'root',
      password: '1111',
      port: 3444,
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      // set to true to automatically generate schema
      autoSchemaFile: true,
    }),
    TodoItemModule,
    SubTaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
