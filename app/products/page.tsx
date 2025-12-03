import { ProductCard } from '@/components/ProductCard'
import Link from 'next/link'
import { Coffee } from 'lucide-react'

// Datos de ejemplo para GitHub Pages (versión estática)
const mockProducts = [
  {
    id: '1',
    name: 'Café Especial Finca La Esperanza',
    description: 'Café de origen único con notas de chocolate y caramelo, cultivado a 1800 metros sobre el nivel del mar.',
    price: 24.99,
    origin: 'Huila, Colombia',
    images: ['/placeholder-coffee.jpg'],
    producer: {
      farmName: 'Finca La Esperanza',
      country: 'Colombia',
      user: {
        name: 'Carlos Rodríguez',
      },
    },
  },
  {
    id: '2',
    name: 'Café Premium Monte Verde',
    description: 'Café procesado naturalmente con sabores afrutados y cuerpo completo.',
    price: 28.50,
    origin: 'Antioquia, Colombia',
    images: ['/placeholder-coffee.jpg'],
    producer: {
      farmName: 'Monte Verde',
      country: 'Colombia',
      user: {
        name: 'María González',
      },
    },
  },
]

export default function ProductsPage() {
  // En producción estática, usar datos mock
  const products = mockProducts

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
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

