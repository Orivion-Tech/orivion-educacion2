CREATE TABLE curso (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  institucion_id uuid NOT NULL REFERENCES institucion(id),
  nivel_educativo_id uuid NOT NULL REFERENCES nivel_educativo(id),
  periodo_academico_id uuid NOT NULL REFERENCES periodo_academico(id),
  grado integer NOT NULL,
  paralelo varchar(10),
  nombre_curso varchar(100) NOT NULL,
  estado varchar(20) NOT NULL DEFAULT 'Activo'
);

CREATE TABLE materia (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  curso_id uuid NOT NULL REFERENCES curso(id),
  nombre varchar(100) NOT NULL,
  estado varchar(20) NOT NULL DEFAULT 'Activa'
);

CREATE TABLE materia_docente (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  materia_id uuid NOT NULL REFERENCES materia(id),
  docente_usuario_id uuid NOT NULL REFERENCES usuario(id),
  es_titular boolean NOT NULL DEFAULT true
);
