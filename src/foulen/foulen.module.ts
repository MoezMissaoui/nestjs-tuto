import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { FoulenService } from './foulen.service';
import { FoulenController } from './foulen.controller';

// import { SimpleLoggerMiddleware } from '../middlewares/simple-logger.middleware';
import { simpleFunc } from '../middlewares/simple-func.middleware';


@Module({
  controllers: [FoulenController],
  providers: [FoulenService],
})

export class FoulenModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(simpleFunc).forRoutes({path: 'foulen', method: RequestMethod.POST});
  }
}
