import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Institucion } from '../../institucion/entities/institucion.entity';

@Entity({ name: 'tipo_actividad' })
export class TipoActividad {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Institucion, { nullable: false })
  @JoinColumn({ name: 'institucion_id' })
  institucion!: Institucion;

  @Column({ type: 'varchar', length: 100, name: 'nombre' })
  nombre!: string;

  @Column({ type: 'decimal', precision: 5, scale: 2, name: 'peso_default', nullable: true })
  pesoDefault!: string | null;
}
