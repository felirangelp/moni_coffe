# Instrucciones de Instalación - Moni Coffee

## Pasos para configurar el proyecto

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```
DATABASE_URL="file:./dev.db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="tu-clave-secreta-aqui-cambiar-en-produccion"
UPLOAD_DIR="./public/uploads"
```

### 3. Configurar la base de datos

```bash
# Generar el cliente de Prisma
npx prisma generate

# Crear la base de datos y ejecutar migraciones
npx prisma migrate dev --name init

# (Opcional) Abrir Prisma Studio para ver la base de datos
npx prisma studio
```

### 4. Ejecutar el proyecto en desarrollo

```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:3000`

## Estructura de la Aplicación

### Páginas Públicas
- `/` - Página de inicio
- `/products` - Catálogo de productos
- `/products/[id]` - Detalle de producto con QR
- `/track` - Rastrear café por código QR
- `/login` - Inicio de sesión para clientes
- `/cart` - Carrito de compras

### Panel de Productores
- `/producer/login` - Inicio de sesión para productores
- `/producer/register` - Registro de nuevos productores
- `/producer/dashboard` - Panel principal del productor
- `/producer/products/new` - Crear nuevo producto

### API Routes
- `/api/auth/register` - Registro de usuarios
- `/api/auth/login` - Autenticación
- `/api/producer/products` - Gestión de productos

## Características Implementadas

✅ Sistema de autenticación (productores y clientes)
✅ Panel de productores para gestionar productos
✅ Subida de imágenes e historias de productores
✅ Sistema de códigos QR únicos por producto
✅ Página de seguimiento/trazabilidad
✅ Catálogo de productos con información de origen
✅ Diseño responsive y moderno
✅ Base de datos con Prisma (SQLite)

## Próximos Pasos (Mejoras Futuras)

- [ ] Implementar sistema de sesiones completo (NextAuth)
- [ ] Subida real de imágenes a almacenamiento
- [ ] Sistema de pagos integrado
- [ ] Notificaciones por email
- [ ] Panel de administración
- [ ] Sistema de reseñas y calificaciones
- [ ] Integración con servicios de envío
- [ ] App móvil para escanear QR

## Notas Importantes

- La base de datos SQLite es para desarrollo. En producción, considera usar PostgreSQL o MySQL.
- Las imágenes actualmente se manejan como URLs. Implementa un sistema de almacenamiento real (S3, Cloudinary, etc.) para producción.
- El sistema de autenticación actual es básico. Implementa NextAuth para una solución más robusta.
- El escáner de QR necesita una librería adicional como `@zxing/library` para funcionar completamente.

