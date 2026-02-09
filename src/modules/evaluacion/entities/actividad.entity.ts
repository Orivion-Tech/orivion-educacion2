import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Materia } from '../../academico/entities/materia.entity';
import { PeriodoAcademico } from '../../academico/entities/periodo-academico.entity';
import { TipoActividad } from './tipo-actividad.entity';

@Entity({ name: 'actividad' })
export class Actividad {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Materia, { nullable: false })
  @JoinColumn({ name: 'materia_id' })
  materia!: Materia;

  @ManyToOne(() => TipoActividad, { nullable: false })
  @JoinColumn({ name: 'tipo_actividad_id' })
  tipoActividad!: TipoActividad;

  @ManyToOne(() => PeriodoAcademico, { nullable: false })
  @JoinColumn({ name: 'periodo_academico_id' })
  periodoAcademico!: PeriodoAcademico;

  @Column({ type: 'varchar', length: 200, name: 'nombre' })
  nombre!: string;

  @Column({ type: 'decimal', precision: 5, scale: 2, name: 'peso' })
  peso!: string;
}
