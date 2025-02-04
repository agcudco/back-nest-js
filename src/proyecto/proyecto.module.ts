import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tarea } from "src/tarea/tarea.entity";
import { Proyecto } from "./proyecto.entity";
import { ProyectoService } from "./proyecto.service";
import { ProyectoController } from "./proyecto.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Tarea, Proyecto])],
    providers: [ProyectoService],
    controllers: [ProyectoController],
    exports: [ProyectoService]
})
export class ProyectoModule { }