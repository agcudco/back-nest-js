import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('notificaciones')
export class Notificacion {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'message' })
    mensaje: string;

    @Column()
    tipo: string; //Ejemplo: "Sistema", "Alerta", "Recordatorio"

    @CreateDateColumn()
    fechaCreacion: Date;

    @UpdateDateColumn()
    fechaActualizacion: Date;

}