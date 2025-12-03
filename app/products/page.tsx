import { prisma } from '@/lib/prisma'
import { ProductCard } from '@/components/ProductCard'
import Link from 'next/link'
import { Coffee } from 'lucide-react'
import { parseImages } from '@/lib/utils'

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    where: { isActive: true },
    include: {
      producer: {
        include: {
          user: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  })

  // Convertir imágenes de JSON a arrays
  const productsWithImages = products.map((product) => ({
    ...product,
    images: parseImages(product.images),
  }))

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-coffee-900 mb-4">
          Nuestros Cafés de Origen
        </h1>
        <p className="text-lg text-gray-600">
          Descubre cafés únicos directamente de sus productores
        </p>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-20">
          <Coffee className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-xl text-gray-600 mb-4">
            Aún no hay productos disponibles
          </p>
          <Link
            href="/producer/register"
            className="text-coffee-700 hover:text-coffee-800 font-semibold"
          >
            ¿Eres productor? Regístrate aquí
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsWithImages.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

