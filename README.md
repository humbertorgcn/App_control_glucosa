#Control de Glucosa

Aplicación web (PWA) para registrar y visualizar los niveles de glucosa en sangre a lo largo del día. Pensada para acompañar el seguimiento diario entre consultas médicas.

 **Aviso importante:** esta app es un registro personal de apoyo. No sustituye al glucómetro ni al seguimiento médico profesional. Su función es ayudar a visualizar la evolución de los valores entre consultas.

## Funcionalidades

- Registro manual de mediciones (valor, fecha, hora y franja: mañana / tarde / noche).
- Gráfico con la media diaria y filtro semanal/mensual.
- Calendario con las mediciones de cada día.
- Recordatorios (notificaciones) configurables por franja horaria, que se suprimen automáticamente si ya existe una medición registrada ese día en esa franja.
- Funciona sin conexión: las mediciones se guardan localmente y se sincronizan al recuperar internet.
- Pantalla de ajustes para cambiar el número de mediciones diarias y sus horarios.

## Stack técnico

- **Frontend:** HTML + CSS + JavaScript (PWA)
- **Backend:** [Supabase](https://supabase.com) — base de datos, autenticación (Supabase Auth) y notificaciones (Edge Functions)
- **Seguridad:** Row Level Security (RLS) en todas las tablas, para que cada usuario solo pueda ver y modificar sus propios datos

## Modelo de datos

- `perfil`: datos del usuario (nombre, tipo de diabetes, años, número de mediciones/día, horarios)
- `mediciones`: cada registro individual (valor, fecha, hora, franja), enlazado al perfil

## Estado del proyecto

🚧 En desarrollo.

Pendiente:
- [ ] Programación del cron diario en Supabase Edge Functions
- [ ] Gestión del token del dispositivo para notificaciones push

## Licencia

Este proyecto **no** tiene una licencia de código abierto. Todos los derechos reservados © Roberto Gabriel Cobo Nieto / humbertorgcn [2026].
Puedes ver y descargar el código libremente, pero no está permitido modificarlo, redistribuirlo ni reutilizarlo sin permiso expreso del autor.
