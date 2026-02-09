import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'escala_calificacion' })
export class EscalaCalificacion {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 100, name: 'nombre' })
  nombre!: string;

  @Column({ type: 'varchar', length: 20, name: 'tipo' })
  tipo!: string;

  @Column({ type: 'decimal', precision: 5, scale: 2, name: 'valor_minimo', nullable: true })
  valorMinimo!: string | null;

  @Column({ type: 'decimal', precision: 5, scale: 2, name: 'valor_maximo', nullable: true })
  valorMaximo!: string | null;
}
