CREATE TABLE estudiante (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id uuid NOT NULL UNIQUE REFERENCES usuario(id),
  curso_id uuid NOT NULL REFERENCES curso(id),
  numero_matricula varchar(50) NOT NULL,
  estado varchar(20) NOT NULL DEFAULT 'Activo'
);

CREATE TABLE padre_estudiante (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  padre_usuario_id uuid NOT NULL REFERENCES usuario(id),
  estudiante_id uuid NOT NULL REFERENCES estudiante(id),
  tipo_parentesco varchar(50) NOT NULL
);
