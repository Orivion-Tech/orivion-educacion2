import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'estado_asistencia' })
export class EstadoAsistencia {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 50, name: 'nombre' })
  nombre!: string;

  @Column({ type: 'varchar', length: 20, name: 'codigo' })
  codigo!: string;

  @Column({ type: 'boolean', name: 'cuenta_como_asistencia', default: false })
  cuentaComoAsistencia!: boolean;
}
