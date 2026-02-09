import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Materia } from '../../academico/entities/materia.entity';
import { Usuario } from '../../identity/entities/usuario.entity';
import { Estudiante } from '../../estudiantes/entities/estudiante.entity';
import { EstadoAsistencia } from './estado-asistencia.entity';

@Entity({ name: 'asistencia' })
export class Asistencia {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Estudiante, { nullable: false })
  @JoinColumn({ name: 'estudiante_id' })
  estudiante!: Estudiante;

  @ManyToOne(() => Materia, { nullable: false })
  @JoinColumn({ name: 'materia_id' })
  materia!: Materia;

  @Column({ type: 'date', name: 'fecha' })
  fecha!: Date;

  @ManyToOne(() => EstadoAsistencia, { nullable: false })
  @JoinColumn({ name: 'estado_asistencia_id' })
  estadoAsistencia!: EstadoAsistencia;

  @ManyToOne(() => Usuario, { nullable: false })
  @JoinColumn({ name: 'registrado_por_usuario_id' })
  registradoPorUsuario!: Usuario;

  @Column({ type: 'timestamp', name: 'fecha_registro', default: () => 'now()' })
  fechaRegistro!: Date;
}
