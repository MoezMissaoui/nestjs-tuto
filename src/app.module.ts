import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoulenModule } from './foulen/foulen.module';

@Module({
  imports: [FoulenModule],
  controllers: [AppController, ],
  providers: [AppService],
})
export class AppModule {}
