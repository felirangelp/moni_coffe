'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Plus, Edit, Package, Coffee, Image as ImageIcon } from 'lucide-react'
import { formatPrice } from '@/lib/utils'

interface Product {
  id: string
  name: string
  price: number
  stock: number
  images: string[] | string
  isActive: boolean
}

export default function ProducerDashboard() {
  const router = useRouter()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: Fetch products from API
    // Simulated data for now
    setTimeout(() => {
      setProducts([
        {
          id: '1',
          name: 'Café Especial Finca La Esperanza',
          price: 24.99,
          stock: 50,
          images: '[]',
          isActive: true,
        },
      ])
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-coffee-900 mb-4">
          Panel de Productor
        </h1>
        <p className="text-gray-600">
          Gestiona tus productos y comparte tu historia
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Productos Activos</p>
              <p className="text-3xl font-bold text-coffee-900">
                {products.filter((p) => p.isActive).length}
              </p>
            </div>
            <Package className="w-12 h-12 text-coffee-700" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Stock</p>
              <p className="text-3xl font-bold text-coffee-900">
                {products.reduce((sum, p) => sum + p.stock, 0)}
              </p>
            </div>
            <Coffee className="w-12 h-12 text-coffee-700" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Perfil</p>
              <Link
                href="/producer/profile"
                className="text-coffee-700 hover:text-coffee-800 font-semibold"
              >
                Editar Perfil
              </Link>
            </div>
            <ImageIcon className="w-12 h-12 text-coffee-700" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-coffee-900">Mis Productos</h2>
          <Link
            href="/producer/products/new"
            className="bg-coffee-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-coffee-800 transition flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Nuevo Producto
          </Link>
        </div>

        {loading ? (
          <div className="p-12 text-center">
            <p className="text-gray-600">Cargando productos...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="p-12 text-center">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-600 mb-4">
              Aún no has creado productos
            </p>
            <Link
              href="/producer/products/new"
              className="inline-block bg-coffee-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-coffee-800 transition"
            >
              Crear Primer Producto
            </Link>
          </div>
        ) : (
          <div className="p-6">
            <div className="space-y-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="border rounded-lg p-6 hover:shadow-md transition"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-coffee-900 mb-2">
                        {product.name}
                      </h3>
                      <div className="flex gap-6 text-sm text-gray-600">
                        <span>Precio: {formatPrice(product.price)}</span>
                        <span>Stock: {product.stock}</span>
                        <span
                          className={
                            product.isActive
                              ? 'text-green-600 font-semibold'
                              : 'text-gray-400'
                          }
                        >
                          {product.isActive ? 'Activo' : 'Inactivo'}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`/producer/products/${product.id}/edit`}
                      className="ml-4 text-coffee-700 hover:text-coffee-800"
                    >
                      <Edit className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

