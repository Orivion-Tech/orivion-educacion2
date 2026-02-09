import { Column, Entity, Index, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from '../../identity/entities/usuario.entity';
import { Curso } from '../../academico/entities/curso.entity';

@Entity({ name: 'estudiante' })
@Index(['usuario'], { unique: true })
export class Estudiante {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @OneToOne(() => Usuario, { nullable: false })
  @JoinColumn({ name: 'usuario_id' })
  usuario!: Usuario;

  @ManyToOne(() => Curso, { nullable: false })
  @JoinColumn({ name: 'curso_id' })
  curso!: Curso;

  @Column({ type: 'varchar', length: 50, name: 'numero_matricula' })
  numeroMatricula!: string;

  @Column({ type: 'varchar', length: 20, name: 'estado', default: 'Activo' })
  estado!: string;
}
