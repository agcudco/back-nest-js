import { Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { Usuario } from "./usuario.entity";

@Controller('usuario')
export class UsuarioController {
    constructor(
        private readonly service: UsuarioService
    ) { }

    @Get()
    async findAll(): Promise<Usuario[]> {
        return await this.service.findAll();
    }

    /// localhost:3000/usuario/1/roles/2
    @Post(':idUsuario/roles/:idRol')
    async asignarRol(
        @Param('idUsuario', ParseIntPipe) idUsuario: number,
        @Param('idRol', ParseIntPipe) idRol: number,
    ): Promise<Usuario> {
        return await this.service.asignarRol(idUsuario, idRol);
    }
}