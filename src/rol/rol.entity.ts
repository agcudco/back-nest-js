import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'rol' })
export class Rol {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column({nullable: true})
    descripcion?: string;

    @CreateDateColumn()
    creadoEn: Date;

    @UpdateDateColumn()
    actualizadoEn: Date;
}