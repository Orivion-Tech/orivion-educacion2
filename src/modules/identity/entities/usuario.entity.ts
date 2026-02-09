import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'usuario' })
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 20, name: 'cedula', unique: true })
  cedula!: string;

  @Column({ type: 'varchar', length: 255, name: 'email', unique: true })
  email!: string;

  @Column({ type: 'varchar', length: 255, name: 'password_hash' })
  passwordHash!: string;

  @Column({ type: 'varchar', length: 100, name: 'nombre' })
  nombre!: string;

  @Column({ type: 'varchar', length: 100, name: 'apellido' })
  apellido!: string;

  @Column({ type: 'varchar', length: 20, name: 'estado', default: 'Activo' })
  estado!: string;

  @Column({ type: 'timestamp', name: 'fecha_creacion', default: () => 'now()' })
  fechaCreacion!: Date;
}
