import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Usuario } from "./usuario.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Rol } from "src/rol/rol.entity";

@Injectable()
export class UsuarioService {

    constructor(
        @InjectRepository(Usuario)
        private readonly repositorioUsuario: Repository<Usuario>,

        @InjectRepository(Rol)
        private readonly repositorioRol: Repository<Rol>,
    ) { }

    async findAll(): Promise<Usuario[]> {
        return await this.repositorioUsuario.find({ relations: ['roles'] });
    }

    async findById(id: number): Promise<Usuario> {
        const usuario = await this.repositorioUsuario.findOne({
            where: { id },
            relations: ['roles']
        });
        if (!usuario) {
            throw new NotFoundException(`No existe el usuario con id: ${id}`);
        }
        return usuario;
    }

    async asignarRol(idUser: number, idRol: number): Promise<Usuario> {
        const usuario = await this.findById(idUser);

        const rol = await this.repositorioRol.findOne({
            where: { id: idRol }
        });

        if (!rol) {
            throw new NotFoundException(`No existe el rol con id: ${idRol}`);
        }

        if (usuario.roles.find((r) => r.id === rol.id)) {
            return usuario;
        }

        usuario.roles.push(rol);
        return await this.repositorioUsuario.save(usuario);

    }
}