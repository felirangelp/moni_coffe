# Moni Coffee - Plataforma de Café de Origen

Plataforma web para la trazabilidad de café de origen, conectando productores con clientes en Netherlands.

## 🌐 Sitio en Vivo

**GitHub Pages:** https://felirangelp.github.io/moni_coffe/

## Características

- 🌱 **Panel de Productores**: Los productores pueden subir imágenes, historias y gestionar sus productos
- 📦 **Trazabilidad Completa**: Cada producto tiene un código QR único para seguimiento
- 🛒 **E-commerce**: Sistema de compras integrado
- 📱 **Responsive**: Diseño moderno y adaptable a todos los dispositivos
- 🔍 **Seguimiento en Tiempo Real**: Los clientes pueden escanear QR y ver el origen del café

## Tecnologías

- Next.js 14
- TypeScript
- Prisma (SQLite para desarrollo)
- Tailwind CSS
- NextAuth
- QR Code

## Instalación Local

1. Instalar dependencias:
```bash
npm install
```

2. Configurar base de datos:
```bash
npx prisma generate
npx prisma migrate dev --name init
```

3. Configurar variables de entorno:
```bash
cp .env.example .env
```

4. Ejecutar en desarrollo:
```bash
npm run dev
```

## Despliegue

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages usando GitHub Actions.

### Configuración de GitHub Pages

1. Ve a **Settings** → **Pages** en tu repositorio
2. En **Source**, selecciona: **GitHub Actions**
3. El workflow se ejecutará automáticamente en cada push a `main`

### URL del Sitio

Una vez desplegado, el sitio estará disponible en:
```
https://felirangelp.github.io/moni_coffe/
```

## Estructura del Proyecto

- `/app` - Páginas y rutas de Next.js
- `/components` - Componentes reutilizables
- `/lib` - Utilidades y configuración
- `/prisma` - Esquema de base de datos
- `/public` - Archivos estáticos

## Notas Importantes

⚠️ **GitHub Pages es solo para sitios estáticos:**
- Las API routes no funcionan en GitHub Pages
- La base de datos no funciona (usa datos mock/demo)
- El registro y login son solo visuales

Para funcionalidad completa, despliega en:
- **Vercel** (recomendado para Next.js)
- **Netlify**
- **Railway**

Ver `DEPLOY.md` para más opciones de despliegue.

## Licencia

MIT
