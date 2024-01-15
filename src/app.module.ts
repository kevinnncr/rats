import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { RatController } from './rat/rat.controller';
import { CatsService } from './cats/cats.service';
import { RatsService } from './rats/rats.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController, RatController],
  providers: [AppService, CatsService, RatsService],
})
export class AppModule {}
