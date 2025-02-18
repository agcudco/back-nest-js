import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Notificacion } from "./notificacion.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class NotificacionService {

    constructor(
        @InjectRepository(Notificacion)
        private readonly repository: Repository<Notificacion>
    ) { }

    async findAll(): Promise<Notificacion[]> {
        return await this.repository.find();
    }

    async findById(id: number): Promise<Notificacion> {
        const notif = await this.repository.findOne({ where: { id } });
        if (!notif) {
            throw new NotFoundException(`No existe la notificacion con ID : ${id}`);
        }
        return notif;
    }

    async create(data: Partial<Notificacion>): Promise<Notificacion> {
        const temp = this.repository.create(data);
        return await this.repository.save(temp);
    }

    async update(id: number, data: Partial<Notificacion>): Promise<Notificacion> {
        await this.repository.update(id, data);
        return this.findById(id);
    }

    async delete(id: number): Promise<void> {
        const temp = await this.findById(id);
        await this.repository.remove(temp);
    }

}