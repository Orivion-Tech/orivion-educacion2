import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'institucion' })
export class Institucion {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 200, name: 'nombre' })
  nombre!: string;

  @Column({ type: 'varchar', length: 50, name: 'nombre_corto', nullable: true })
  nombreCorto!: string | null;

  @Column({ type: 'varchar', length: 50, name: 'tipo' })
  tipo!: string;

  @Column({ type: 'varchar', length: 20, name: 'regimen' })
  regimen!: string;

  @Column({ type: 'jsonb', name: 'configuracion', nullable: true })
  configuracion!: Record<string, unknown> | null;

  @Column({ type: 'varchar', length: 20, name: 'estado', default: 'Activa' })
  estado!: string;

  @Column({ type: 'timestamp', name: 'fecha_creacion', default: () => 'now()' })
  fechaCreacion!: Date;
}
