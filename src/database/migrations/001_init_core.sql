CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE institucion (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre varchar(200) NOT NULL,
  nombre_corto varchar(50),
  tipo varchar(50) NOT NULL,
  regimen varchar(20) NOT NULL,
  configuracion jsonb,
  estado varchar(20) NOT NULL DEFAULT 'Activa',
  fecha_creacion timestamp NOT NULL DEFAULT now()
);

CREATE TABLE usuario (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  cedula varchar(20) NOT NULL UNIQUE,
  email varchar(255) NOT NULL UNIQUE,
  password_hash varchar(255) NOT NULL,
  nombre varchar(100) NOT NULL,
  apellido varchar(100) NOT NULL,
  estado varchar(20) NOT NULL DEFAULT 'Activo',
  fecha_creacion timestamp NOT NULL DEFAULT now()
);

CREATE TABLE rol (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre varchar(50) NOT NULL UNIQUE,
  descripcion text,
  permisos jsonb NOT NULL,
  es_sistema boolean NOT NULL DEFAULT true,
  fecha_creacion timestamp NOT NULL DEFAULT now()
);

CREATE TABLE usuario_rol (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id uuid NOT NULL REFERENCES usuario(id),
  rol_id uuid NOT NULL REFERENCES rol(id),
  institucion_id uuid NOT NULL REFERENCES institucion(id),
  es_rol_principal boolean NOT NULL DEFAULT false,
  estado varchar(20) NOT NULL DEFAULT 'Activo',
  fecha_asignacion timestamp NOT NULL DEFAULT now()
);
