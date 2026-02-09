# Orivion Educacion Backend (NestJS + PostgreSQL + TypeORM)

Backend base para plataforma educativa multi-institucion. Sin endpoints ni logica de negocio; solo modelo, migraciones SQL y seeds.

## Requisitos
- Node.js 18+ (recomendado 20+)
- PostgreSQL 13+
- Docker + Docker Compose (opcional)

## Levantar todo con Docker
Este proyecto ya incluye `backend + postgres` en `docker-compose.yml`.

1. Levantar servicios:

```bash
docker compose up -d --build
```

2. Ver logs:

```bash
docker compose logs -f
```

3. Bajar servicios:

```bash
docker compose down
```

4. Bajar y reinicializar base (vuelve a ejecutar migraciones + seed):

```bash
docker compose down -v
docker compose up -d --build
```

Notas Docker:
- PostgreSQL expone `localhost:5432`.
- Backend expone `localhost:3000`.
- Las migraciones (`001` a `005`) y `seed.sql` se ejecutan automaticamente en el primer arranque de la base vacia.

## Instalacion
1. Instalar dependencias:

```bash
npm install
```

## Configuracion de PostgreSQL
1. Crear base de datos:

```sql
CREATE DATABASE orivion_educacion;
```

2. Configurar variables de entorno. Copiar `.env.example` a `.env` y ajustar valores:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=orivion_educacion
```

> Nota: Las migraciones habilitan la extension `pgcrypto` para usar `gen_random_uuid()`. El usuario debe tener permisos para crear extensiones.

## Ejecucion de migraciones (SQL)
Ejecutar en orden:

```bash
psql -h $DB_HOST -U $DB_USER -d $DB_NAME -f src/database/migrations/001_init_core.sql
psql -h $DB_HOST -U $DB_USER -d $DB_NAME -f src/database/migrations/002_academico.sql
psql -h $DB_HOST -U $DB_USER -d $DB_NAME -f src/database/migrations/003_curricular.sql
psql -h $DB_HOST -U $DB_USER -d $DB_NAME -f src/database/migrations/004_estudiantes.sql
psql -h $DB_HOST -U $DB_USER -d $DB_NAME -f src/database/migrations/005_operacion.sql
```

## Ejecucion de seeds

```bash
psql -h $DB_HOST -U $DB_USER -d $DB_NAME -f src/database/seeds/seed.sql
```

## Ejecutar la aplicacion

```bash
npm run start:dev
```
