import { Tarea } from "src/tarea/tarea.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'proyectos' })
export class Proyecto {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @CreateDateColumn()
    fechaCreacion: Date;

    @UpdateDateColumn()
    fechaActualizacion: Date;

    @OneToMany(() => Tarea, tarea => tarea.proyecto, { cascade: true })
    tareas: Tarea[];
}