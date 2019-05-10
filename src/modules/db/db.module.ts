import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://juice-punch:versus-1244@juice-punch-cluster-vxwc5.mongodb.net/test?retryWrites=true',
      {
        useNewUrlParser: true,
      },
    ),
  ],
})
export class DbModule {}
