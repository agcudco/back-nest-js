import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { RolService } from "./rol.service";
import { Rol } from "./rol.entity";

@Controller('rol')
export class RolController {

    constructor(private readonly rolService: RolService) { }

    @Get()
    findAll() {
        return this.rolService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number): Promise<Rol | null> {
        return this.rolService.findOne(id);
    }

    @Post()
    create(@Body() rol: Partial<Rol>): Promise<Rol> {
        return this.rolService.create(rol);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() rol: Partial<Rol>): Promise<Rol | null> {
        return this.rolService.update(id, rol);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<void> {
        return this.rolService.delete(id);
    }
}