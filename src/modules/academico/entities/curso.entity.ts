import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Institucion } from '../../institucion/entities/institucion.entity';
import { NivelEducativo } from './nivel-educativo.entity';
import { PeriodoAcademico } from './periodo-academico.entity';

@Entity({ name: 'curso' })
export class Curso {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Institucion, { nullable: false })
  @JoinColumn({ name: 'institucion_id' })
  institucion!: Institucion;

  @ManyToOne(() => NivelEducativo, { nullable: false })
  @JoinColumn({ name: 'nivel_educativo_id' })
  nivelEducativo!: NivelEducativo;

  @ManyToOne(() => PeriodoAcademico, { nullable: false })
  @JoinColumn({ name: 'periodo_academico_id' })
  periodoAcademico!: PeriodoAcademico;

  @Column({ type: 'integer', name: 'grado' })
  grado!: number;

  @Column({ type: 'varchar', length: 10, name: 'paralelo', nullable: true })
  paralelo!: string | null;

  @Column({ type: 'varchar', length: 100, name: 'nombre_curso' })
  nombreCurso!: string;

  @Column({ type: 'varchar', length: 20, name: 'estado', default: 'Activo' })
  estado!: string;
}
