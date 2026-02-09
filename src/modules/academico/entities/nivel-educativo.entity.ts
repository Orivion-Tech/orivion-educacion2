import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'nivel_educativo' })
export class NivelEducativo {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 50, name: 'nombre' })
  nombre!: string;

  @Column({ type: 'varchar', length: 20, name: 'codigo', unique: true })
  codigo!: string;

  @Column({ type: 'integer', name: 'orden' })
  orden!: number;

  @Column({ type: 'boolean', name: 'es_sistema', default: true })
  esSistema!: boolean;
}
