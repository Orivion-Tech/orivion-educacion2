INSERT INTO rol (nombre, permisos) VALUES
  ('Rector', '{}'::jsonb),
  ('Docente', '{}'::jsonb),
  ('Padre', '{}'::jsonb),
  ('Estudiante', '{}'::jsonb)
ON CONFLICT (nombre) DO NOTHING;

INSERT INTO nivel_educativo (nombre, codigo, orden) VALUES
  ('EGB', 'EGB', 1),
  ('BGU', 'BGU', 2)
ON CONFLICT (codigo) DO NOTHING;

INSERT INTO estado_asistencia (nombre, codigo, cuenta_como_asistencia)
SELECT 'Presente', 'Presente', true
WHERE NOT EXISTS (SELECT 1 FROM estado_asistencia WHERE nombre = 'Presente');

INSERT INTO estado_asistencia (nombre, codigo, cuenta_como_asistencia)
SELECT 'Ausente', 'Ausente', false
WHERE NOT EXISTS (SELECT 1 FROM estado_asistencia WHERE nombre = 'Ausente');

INSERT INTO estado_asistencia (nombre, codigo, cuenta_como_asistencia)
SELECT 'Tarde', 'Tarde', false
WHERE NOT EXISTS (SELECT 1 FROM estado_asistencia WHERE nombre = 'Tarde');

INSERT INTO institucion (nombre, tipo, regimen)
SELECT 'Institucion Piloto', 'Piloto', 'General'
WHERE NOT EXISTS (SELECT 1 FROM institucion WHERE nombre = 'Institucion Piloto');
