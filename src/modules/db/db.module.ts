import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://juicepunch:versus-1244@juice-punch-01-1zoox.mongodb.net/test',
      {
        useNewUrlParser: true,
      },
    ),
  ],
})
export class DbModule {}
