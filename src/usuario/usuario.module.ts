import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Usuario } from "./usuario.entity";
import { Rol } from "src/rol/rol.entity";
import { UsuarioService } from "./usuario.service";
import { UsuarioController } from "./usuario.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Usuario, Rol])],
    providers: [UsuarioService],
    controllers: [UsuarioController]
})
export class UsuarioModule { }