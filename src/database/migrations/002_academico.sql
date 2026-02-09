CREATE TABLE nivel_educativo (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre varchar(50) NOT NULL,
  codigo varchar(20) NOT NULL UNIQUE,
  orden integer NOT NULL,
  es_sistema boolean NOT NULL DEFAULT true
);

CREATE TABLE periodo_academico (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  institucion_id uuid NOT NULL REFERENCES institucion(id),
  nombre varchar(100) NOT NULL,
  tipo varchar(20) NOT NULL,
  numero integer NOT NULL,
  anio_lectivo integer NOT NULL,
  fecha_inicio date NOT NULL,
  fecha_fin date NOT NULL,
  es_actual boolean NOT NULL DEFAULT false
);
