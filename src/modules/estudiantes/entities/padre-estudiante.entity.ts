import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from '../../identity/entities/usuario.entity';
import { Estudiante } from './estudiante.entity';

@Entity({ name: 'padre_estudiante' })
export class PadreEstudiante {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Usuario, { nullable: false })
  @JoinColumn({ name: 'padre_usuario_id' })
  padreUsuario!: Usuario;

  @ManyToOne(() => Estudiante, { nullable: false })
  @JoinColumn({ name: 'estudiante_id' })
  estudiante!: Estudiante;

  @Column({ type: 'varchar', length: 50, name: 'tipo_parentesco' })
  tipoParentesco!: string;
}
