import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from '../../identity/entities/usuario.entity';
import { Materia } from './materia.entity';

@Entity({ name: 'materia_docente' })
export class MateriaDocente {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Materia, { nullable: false })
  @JoinColumn({ name: 'materia_id' })
  materia!: Materia;

  @ManyToOne(() => Usuario, { nullable: false })
  @JoinColumn({ name: 'docente_usuario_id' })
  docenteUsuario!: Usuario;

  @Column({ type: 'boolean', name: 'es_titular', default: true })
  esTitular!: boolean;
}
