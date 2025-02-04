import { Controller, Get } from "@nestjs/common";
import { TareaService } from "./tarea.service";
import { Tarea } from "./tarea.entity";

@Controller('tareas')
export class TareaController {
    constructor(
        private readonly tareaService: TareaService
    ) { }

    @Get()
    async obtenerTodos(): Promise<Tarea[]> {
        return await this.tareaService.obtenerTodos();
    }
}