import { Injectable } from "@nestjs/common";
import { Rol } from "./rol.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class RolService {

    constructor(
        @InjectRepository(Rol)
        private readonly rolRepository: Repository<Rol>
    ) { }


    findAll(): Promise<Rol[]> {
        return this.rolRepository.find();
    }

    //buscar por id
    findOne(id: number): Promise<Rol | null> {
        return this.rolRepository.findOne({ where: { id } });
    }

    //crear
    create(rol: Partial<Rol>): Promise<Rol> {
        const newRol = this.rolRepository.create(rol);
        return this.rolRepository.save(newRol);
    }

    //actualizar
    async update(id: number, rol: Partial<Rol>): Promise<Rol | null> {
        await this.rolRepository.update({ id }, rol);
        return this.findOne(id);
    }

    //eliminar
    async delete(id: number): Promise<void> {
        await this.rolRepository.delete(id);
    }

}