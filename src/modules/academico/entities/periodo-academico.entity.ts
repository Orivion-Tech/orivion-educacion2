import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Institucion } from '../../institucion/entities/institucion.entity';

@Entity({ name: 'periodo_academico' })
export class PeriodoAcademico {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Institucion, { nullable: false })
  @JoinColumn({ name: 'institucion_id' })
  institucion!: Institucion;

  @Column({ type: 'varchar', length: 100, name: 'nombre' })
  nombre!: string;

  @Column({ type: 'varchar', length: 20, name: 'tipo' })
  tipo!: string;

  @Column({ type: 'integer', name: 'numero' })
  numero!: number;

  @Column({ type: 'integer', name: 'anio_lectivo' })
  anioLectivo!: number;

  @Column({ type: 'date', name: 'fecha_inicio' })
  fechaInicio!: Date;

  @Column({ type: 'date', name: 'fecha_fin' })
  fechaFin!: Date;

  @Column({ type: 'boolean', name: 'es_actual', default: false })
  esActual!: boolean;
}
