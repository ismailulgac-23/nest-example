import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { appendFile } from 'fs';
import { LoggerMiddleware } from './logger.middleware';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})


export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: "user", method: RequestMethod.GET });
  }
}