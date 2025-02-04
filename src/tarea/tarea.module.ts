import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Proyecto } from "src/proyecto/proyecto.entity";
import { Tarea } from "./tarea.entity";
import { TareaService } from "./tarea.service";
import { TareaController } from "./tarea.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Tarea, Proyecto])],
    providers: [TareaService],
    controllers: [TareaController],
    exports: [TareaService]
})
export class TareaModule { }