import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Curso } from './curso.entity';

@Entity({ name: 'materia' })
export class Materia {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Curso, { nullable: false })
  @JoinColumn({ name: 'curso_id' })
  curso!: Curso;

  @Column({ type: 'varchar', length: 100, name: 'nombre' })
  nombre!: string;

  @Column({ type: 'varchar', length: 20, name: 'estado', default: 'Activa' })
  estado!: string;
}
