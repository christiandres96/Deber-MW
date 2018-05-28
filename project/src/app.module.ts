import { Module,NestModule,MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {LogMw} from './log.mw';
import {ParametrosController} from "./parametros.controller";
import {CacheMw} from "./cache.mw";

@Module(

    {
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
    nombreAplicacion = 'Middleware';

    configure(consumer: MiddlewareConsumer):
        void {
        consumer
            .apply(LogMw)
            .with(this.nombreAplicacion, 'todo')
            .forRoutes(
                AppController,
            )
            .apply(CacheMw)
            .forRoutes(ParametrosController);
    }
}