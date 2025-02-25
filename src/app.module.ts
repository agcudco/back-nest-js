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
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT ?? '5432', 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
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
