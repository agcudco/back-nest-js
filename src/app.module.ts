import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rol } from './rol/rol.entity';
import { RolModule } from './rol/rol.module';
import { ProyectoModule } from './proyecto/proyecto.module';
import { TareaModule } from './tarea/tarea.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin**123',
      database: 'bd-suarios',
      //entities: [Rol],
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    RolModule,
    ProyectoModule,
    TareaModule,
    UsuarioModule
  ]
})
export class AppModule { }
