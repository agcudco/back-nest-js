import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rol } from './rol/rol.entity';
import { RolModule } from './rol/rol.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'admin**123',
      database:'bd-suarios',
      entities: [Rol],
      synchronize: true
    }),
    RolModule
  ]
})
export class AppModule {}
