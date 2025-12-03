# Guía de Despliegue - Moni Coffee

## Opción 1: Vercel (Recomendado para Next.js)

Vercel es la plataforma creada por los mismos desarrolladores de Next.js y es la mejor opción para desplegar aplicaciones Next.js.

### Pasos para desplegar en Vercel:

1. **Instalar Vercel CLI** (opcional, también puedes usar la interfaz web):
```bash
npm i -g vercel
```

2. **Desplegar desde la terminal**:
```bash
vercel
```

3. **O usar la interfaz web de Vercel**:
   - Ve a [vercel.com](https://vercel.com)
   - Conecta tu repositorio de GitHub
   - Vercel detectará automáticamente que es un proyecto Next.js
   - Configura las variables de entorno (ver abajo)
   - Haz clic en "Deploy"

### Variables de Entorno en Vercel:

Necesitas configurar estas variables en el dashboard de Vercel:

```
DATABASE_URL="tu-url-de-base-de-datos"
NEXTAUTH_URL="https://tu-dominio.vercel.app"
NEXTAUTH_SECRET="tu-clave-secreta-generada"
```

### Base de Datos para Producción:

SQLite no funciona bien en Vercel. Necesitas usar una base de datos en la nube:

**Opción A: PostgreSQL (Recomendado)**
- [Supabase](https://supabase.com) - Gratis hasta 500MB
- [Neon](https://neon.tech) - Gratis con tier generoso
- [Railway](https://railway.app) - $5/mes con tier gratuito

**Opción B: MySQL**
- [PlanetScale](https://planetscale.com) - Tier gratuito disponible

### Configurar Prisma para PostgreSQL:

1. Cambia el `datasource` en `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

2. Ejecuta las migraciones:
```bash
npx prisma migrate deploy
```

## Opción 2: Netlify

Netlify también soporta Next.js:

1. Ve a [netlify.com](https://netlify.com)
2. Conecta tu repositorio de GitHub
3. Configura:
   - Build command: `npm run build`
   - Publish directory: `.next`

## Opción 3: Railway

Railway es excelente para aplicaciones full-stack:

1. Ve a [railway.app](https://railway.app)
2. Crea un nuevo proyecto desde GitHub
3. Railway detectará automáticamente Next.js
4. Agrega una base de datos PostgreSQL desde el dashboard
5. Configura las variables de entorno

## Opción 4: Render

Render también soporta Next.js:

1. Ve a [render.com](https://render.com)
2. Conecta tu repositorio
3. Selecciona "Web Service"
4. Configura las variables de entorno

## Notas Importantes:

- **GitHub Pages NO funciona** para aplicaciones Next.js con API routes
- Necesitas una base de datos en la nube (no SQLite local)
- Configura todas las variables de entorno en la plataforma
- El dominio será algo como: `tu-proyecto.vercel.app`

## Despliegue Rápido con Vercel:

```bash
# Desde la raíz del proyecto
vercel

# Para producción
vercel --prod
```

¡Y listo! Tu aplicación estará en línea en minutos.

