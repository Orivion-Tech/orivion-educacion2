import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Actividad } from './actividad.entity';
import { Estudiante } from '../../estudiantes/entities/estudiante.entity';

@Entity({ name: 'calificacion' })
export class Calificacion {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Actividad, { nullable: false })
  @JoinColumn({ name: 'actividad_id' })
  actividad!: Actividad;

  @ManyToOne(() => Estudiante, { nullable: false })
  @JoinColumn({ name: 'estudiante_id' })
  estudiante!: Estudiante;

  @Column({ type: 'decimal', precision: 5, scale: 2, name: 'calificacion', nullable: true })
  calificacion!: string | null;
}
