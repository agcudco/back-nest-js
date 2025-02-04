import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Tarea } from "./tarea.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class TareaService {

    constructor(
        @InjectRepository(Tarea)
        private readonly repositoryTarea: Repository<Tarea>
    ) { }

    async obtenerTodos(): Promise<Tarea[]> {
        return await this.repositoryTarea.find({ relations: ['proyecto'] });
    }

    async crear(data: Partial<Tarea>): Promise<Tarea> {
        const objTarea = this.repositoryTarea.create(data);
        return await this.repositoryTarea.save(objTarea);
    }

    async obtenerPorId(id: number): Promise<Tarea> {
        const tarea = await this.repositoryTarea.findOne({
            where: { id },
            relations: ['proyecto']
        });

        if (!tarea) {
            throw new NotFoundException(`No existe la tarea con el id: ${id}`);
        }
        return tarea;
    }

    async actualizar(id: number, data: Partial<Tarea>): Promise<Tarea> {
        await this.repositoryTarea.update(id, data);
        return this.obtenerPorId(id);
    }

    async eliminar(id: number): Promise<void> {
        const tarea = await this.obtenerPorId(id);
        await this.repositoryTarea.remove(tarea);
    }


}