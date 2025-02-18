import { Rol } from "src/rol/rol.entity";
import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'usuario' })
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, length: 10 })
    dni: string;

    @Column({ unique: true })
    username: string;

    @Column({ nullable: false })
    nombres: string;

    @Column({ nullable: false })
    apellidos: string;

    @Column({ unique: true })
    email: string;

    @CreateDateColumn()
    fechaCreacion: Date;

    @UpdateDateColumn()
    fechaActualizacion: Date;

    @ManyToMany(() => Rol, (rol) => rol.usuarios)
    roles: Rol[];
}