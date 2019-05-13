import { Module } from '@nestjs/common';

import { DbModule } from './modules/db';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { EventsModule } from './modules/socket-events/events.module';

@Module({
  imports: [
  DbModule,
    UserModule,
    EventsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
