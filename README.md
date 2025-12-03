# Moni Coffee - Plataforma de Café de Origen

Plataforma web para la trazabilidad de café de origen, conectando productores con clientes en Netherlands.

## Características

- 🌱 **Panel de Productores**: Los productores pueden subir imágenes, historias y gestionar sus productos
- 📦 **Trazabilidad Completa**: Cada producto tiene un código QR único para seguimiento
- 🛒 **E-commerce**: Sistema de compras integrado
- 📱 **Responsive**: Diseño moderno y adaptable a todos los dispositivos
- 🔍 **Seguimiento en Tiempo Real**: Los clientes pueden escanear QR y ver el origen del café

## Tecnologías

- Next.js 14
- TypeScript
- Prisma (SQLite)
- Tailwind CSS
- NextAuth
- QR Code

## Instalación

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

## Estructura del Proyecto

- `/app` - Páginas y rutas de Next.js
- `/components` - Componentes reutilizables
- `/lib` - Utilidades y configuración
- `/prisma` - Esquema de base de datos
- `/public` - Archivos estáticos

