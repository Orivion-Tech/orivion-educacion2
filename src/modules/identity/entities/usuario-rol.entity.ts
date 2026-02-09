import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Institucion } from '../../institucion/entities/institucion.entity';
import { Rol } from './rol.entity';
import { Usuario } from './usuario.entity';

@Entity({ name: 'usuario_rol' })
export class UsuarioRol {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Usuario, { nullable: false })
  @JoinColumn({ name: 'usuario_id' })
  usuario!: Usuario;

  @ManyToOne(() => Rol, { nullable: false })
  @JoinColumn({ name: 'rol_id' })
  rol!: Rol;

  @ManyToOne(() => Institucion, { nullable: false })
  @JoinColumn({ name: 'institucion_id' })
  institucion!: Institucion;

  @Column({ type: 'boolean', name: 'es_rol_principal', default: false })
  esRolPrincipal!: boolean;

  @Column({ type: 'varchar', length: 20, name: 'estado', default: 'Activo' })
  estado!: string;

  @Column({ type: 'timestamp', name: 'fecha_asignacion', default: () => 'now()' })
  fechaAsignacion!: Date;
}
