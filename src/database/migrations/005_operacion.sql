CREATE TABLE estado_asistencia (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre varchar(50) NOT NULL,
  codigo varchar(20) NOT NULL,
  cuenta_como_asistencia boolean NOT NULL DEFAULT false
);

CREATE TABLE asistencia (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  estudiante_id uuid NOT NULL REFERENCES estudiante(id),
  materia_id uuid NOT NULL REFERENCES materia(id),
  fecha date NOT NULL,
  estado_asistencia_id uuid NOT NULL REFERENCES estado_asistencia(id),
  registrado_por_usuario_id uuid NOT NULL REFERENCES usuario(id),
  fecha_registro timestamp NOT NULL DEFAULT now()
);

CREATE TABLE tipo_actividad (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  institucion_id uuid NOT NULL REFERENCES institucion(id),
  nombre varchar(100) NOT NULL,
  peso_default decimal(5,2)
);

CREATE TABLE escala_calificacion (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre varchar(100) NOT NULL,
  tipo varchar(20) NOT NULL,
  valor_minimo decimal(5,2),
  valor_maximo decimal(5,2)
);

CREATE TABLE actividad (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  materia_id uuid NOT NULL REFERENCES materia(id),
  tipo_actividad_id uuid NOT NULL REFERENCES tipo_actividad(id),
  periodo_academico_id uuid NOT NULL REFERENCES periodo_academico(id),
  nombre varchar(200) NOT NULL,
  peso decimal(5,2) NOT NULL
);

CREATE TABLE calificacion (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  actividad_id uuid NOT NULL REFERENCES actividad(id),
  estudiante_id uuid NOT NULL REFERENCES estudiante(id),
  calificacion decimal(5,2)
);
