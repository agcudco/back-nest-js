import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { ProyectoService } from "./proyecto.service";
import { Proyecto } from "./proyecto.entity";
import { Tarea } from "src/tarea/tarea.entity";

@Controller('proyectos')
export class ProyectoController {

    constructor(
        private readonly proyectoService: ProyectoService
    ) { }

    @Get()
    async obtenerTodos(): Promise<Proyecto[]> {
        return this.proyectoService.obtenerTodos();
    }

    @Get(':id')//localhost:3000/proyectos/1
    async obtenerPorId(@Param('id', ParseIntPipe) id: number): Promise<Proyecto> {
        return await this.obtenerPorId(id);
    }

    @Post()
    async crear(@Body() data: Partial<Proyecto>): Promise<Proyecto> {
        return await this.proyectoService.crear(data);
    }

    @Post(':id/tareas')//localhost:3000/1/tareas
    async agregarTarea(
        @Param('id', ParseIntPipe) id: number,
        @Body() dataTarea: Partial<Tarea>
    ): Promise<Proyecto> {
        return await this.proyectoService.agregarTarea(id, dataTarea);
    }
}
