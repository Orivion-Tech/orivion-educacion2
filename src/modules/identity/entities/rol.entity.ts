import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'rol' })
export class Rol {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 50, name: 'nombre', unique: true })
  nombre!: string;

  @Column({ type: 'text', name: 'descripcion', nullable: true })
  descripcion!: string | null;

  @Column({ type: 'jsonb', name: 'permisos' })
  permisos!: Record<string, unknown>;

  @Column({ type: 'boolean', name: 'es_sistema', default: true })
  esSistema!: boolean;

  @Column({ type: 'timestamp', name: 'fecha_creacion', default: () => 'now()' })
  fechaCreacion!: Date;
}
