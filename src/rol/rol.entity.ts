import { Usuario } from "src/usuario/usuario.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'rol' })
export class Rol {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column({ nullable: true })
    descripcion?: string;

    @CreateDateColumn()
    creadoEn: Date;

    @UpdateDateColumn()
    actualizadoEn: Date;

    @ManyToMany(() => Usuario, (usuario) => usuario.roles)
    @JoinTable({ name: 'rol_usuario' })
    usuarios: Usuario[];
}