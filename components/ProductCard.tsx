import Link from 'next/link'
import Image from 'next/image'
import { formatPrice } from '@/lib/utils'
import { MapPin, Package } from 'lucide-react'

interface ProductCardProps {
  product: {
    id: string
    name: string
    description: string
    price: number
    origin: string
    images: string[]
    producer: {
      farmName: string
      country: string
      user: {
        name: string
      }
    }
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const mainImage = product.images[0] || '/placeholder-coffee.jpg'

  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
        <div className="relative h-64 w-full">
          <Image
            src={mainImage}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-coffee-900 mb-2">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2 text-coffee-700" />
              <span>
                {product.origin}, {product.producer.country}
              </span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Package className="w-4 h-4 mr-2 text-coffee-700" />
              <span>{product.producer.farmName}</span>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t">
            <span className="text-2xl font-bold text-coffee-700">
              {formatPrice(product.price)}
            </span>
            <span className="text-sm text-coffee-600 bg-coffee-50 px-3 py-1 rounded-full">
              Ver detalles
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

