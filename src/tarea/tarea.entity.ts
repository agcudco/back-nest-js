import { Proyecto } from "src/proyecto/proyecto.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('tareas')
export class Tarea {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column({ nullable: true })
    descripcion?: string;

    @Column({ default: 'pendiente' })
    estado: string;

    @CreateDateColumn()
    fechaCreacion: Date;

    @UpdateDateColumn()
    fechaActualizacion: Date;

    @ManyToOne(() => Proyecto, proyecto => proyecto.tareas, { onDelete: 'RESTRICT' })
    proyecto: Proyecto;
}
