import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Proyecto } from "./proyecto.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Tarea } from "src/tarea/tarea.entity";

@Injectable()
export class ProyectoService {

    constructor(
        @InjectRepository(Proyecto)
        private readonly repositorioProyecto: Repository<Proyecto>,
        @InjectRepository(Tarea)
        private readonly repositorioTarea: Repository<Tarea>
    ) { }

    async obtenerTodos(): Promise<Proyecto[]> {
        return await this.repositorioProyecto.find({ relations: ['tareas'] });
    }

    async obtenerPorId(id: number): Promise<Proyecto> {
        const proyecto = await this.repositorioProyecto.findOne({
            where: { id },
            relations: ['tareas']
        });
        if (!proyecto) {
            throw new NotFoundException(`No existe el proyecto con el ID: ${id}`);
        }
        return proyecto;
    }

    async crear(data: Partial<Proyecto>): Promise<Proyecto> {
        const proy = this.repositorioProyecto.create(data);
        return await this.repositorioProyecto.save(proy);
    }

    async actualizar(id: number, data: Partial<Proyecto>): Promise<Proyecto> {
        await this.repositorioProyecto.update(id, data);
        return this.obtenerPorId(id);
    }

    async eliminar(id: number): Promise<void> {
        const data = await this.obtenerPorId(id);
        await this.repositorioProyecto.remove(data);
    }

    //agregar tareas a un proyecto
    async agregarTarea(idProyecto: number, dataTarea: Partial<Tarea>): Promise<Proyecto> {
        const proyTemp = await this.obtenerPorId(idProyecto);
        const tarea = this.repositorioTarea.create(dataTarea);
        tarea.proyecto = proyTemp;
        await this.repositorioTarea.save(tarea);
        return this.obtenerPorId(idProyecto);
    }

}