import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { formatPrice, parseImages } from '@/lib/utils'
import { MapPin, Package, Coffee } from 'lucide-react'
import { QRCodeDisplay } from '@/components/QRCodeDisplay'
import { AddToCartButton } from '@/components/AddToCartButton'
import Link from 'next/link'

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const product = await prisma.product.findUnique({
    where: { id: params.id, isActive: true },
    include: {
      producer: {
        include: {
          user: true,
        },
      },
    },
  })

  if (!product) {
    notFound()
  }

  // Convertir imágenes de JSON a array
  const productImages = parseImages(product.images)

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Imágenes */}
        <div>
          <div className="relative h-96 w-full rounded-lg overflow-hidden mb-4">
            <Image
              src={productImages[0] || '/placeholder-coffee.jpg'}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          {productImages.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {productImages.slice(1, 5).map((img, idx) => (
                <div key={idx} className="relative h-20 w-full rounded overflow-hidden">
                  <Image
                    src={img}
                    alt={`${product.name} ${idx + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Información */}
        <div>
          <h1 className="text-4xl font-bold text-coffee-900 mb-4">
            {product.name}
          </h1>

          <div className="text-3xl font-bold text-coffee-700 mb-6">
            {formatPrice(product.price)}
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center text-gray-700">
              <MapPin className="w-5 h-5 mr-3 text-coffee-700" />
              <div>
                <span className="font-semibold">Origen:</span> {product.origin},{' '}
                {product.producer.country}
              </div>
            </div>

            <div className="flex items-center text-gray-700">
              <Package className="w-5 h-5 mr-3 text-coffee-700" />
              <div>
                <span className="font-semibold">Finca:</span>{' '}
                {product.producer.farmName}
              </div>
            </div>

            {product.variety && (
              <div className="flex items-center text-gray-700">
                <Coffee className="w-5 h-5 mr-3 text-coffee-700" />
                <div>
                  <span className="font-semibold">Variedad:</span> {product.variety}
                </div>
              </div>
            )}

            {product.altitude && (
              <div className="text-gray-700">
                <span className="font-semibold">Altitud:</span> {product.altitude} m
              </div>
            )}

            {product.process && (
              <div className="text-gray-700">
                <span className="font-semibold">Proceso:</span> {product.process}
              </div>
            )}
          </div>

          <p className="text-gray-700 mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Productor */}
          <div className="bg-coffee-50 p-6 rounded-lg mb-8">
            <h3 className="font-semibold text-coffee-900 mb-2">
              Sobre el Productor
            </h3>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Productor:</span>{' '}
              {product.producer.user.name}
            </p>
            {product.producer.story && (
              <p className="text-gray-700 text-sm">{product.producer.story}</p>
            )}
          </div>

          {/* Stock y Compra */}
          <div className="mb-8">
            <div className="mb-4">
              <span className="text-sm text-gray-600">
                Stock disponible: <span className="font-semibold">{product.stock}</span>
              </span>
            </div>
            <AddToCartButton productId={product.id} stock={product.stock} />
          </div>

          {/* QR Code Preview */}
          <div className="border-t pt-8">
            <h3 className="font-semibold text-coffee-900 mb-4">
              Código QR de Trazabilidad
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Cada producto incluye un código QR único que te permite rastrear el
              origen y el viaje de tu café.
            </p>
            <QRCodeDisplay qrCode={product.qrCode} />
          </div>
        </div>
      </div>

      {/* Trazabilidad */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-coffee-900 mb-8">
          Trazabilidad del Producto
        </h2>
        <Link
          href={`/track?qr=${product.qrCode}`}
          className="inline-block bg-coffee-700 text-white px-6 py-3 rounded-lg hover:bg-coffee-800 transition"
        >
          Ver Seguimiento Completo
        </Link>
      </div>
    </div>
  )
}

