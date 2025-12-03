'use client'

import { useState } from 'react'
import Image from 'next/image'
import { formatPrice } from '@/lib/utils'
import { Trash2, ShoppingBag } from 'lucide-react'

export default function CartPage() {
  // TODO: Implementar carrito real con estado global o contexto
  const [cartItems, setCartItems] = useState<any[]>([])

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-coffee-900 mb-8">Carrito de Compras</h1>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-lg shadow-lg p-12 text-center">
          <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-xl text-gray-600 mb-4">Tu carrito está vacío</p>
          <a
            href="/products"
            className="inline-block bg-coffee-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-coffee-800 transition"
          >
            Ver Productos
          </a>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow p-6 flex gap-6"
              >
                <div className="relative w-24 h-24 rounded overflow-hidden">
                  <Image
                    src={item.image || '/placeholder-coffee.jpg'}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-coffee-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.origin}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <span className="text-lg font-bold text-coffee-700">
                        {formatPrice(item.price)}
                      </span>
                      <span className="text-gray-600">x {item.quantity}</span>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow p-6 h-fit">
            <h2 className="text-2xl font-bold text-coffee-900 mb-6">
              Resumen del Pedido
            </h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Envío</span>
                <span>Calculado al finalizar</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-xl font-bold text-coffee-900">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-coffee-700 text-white py-3 rounded-lg font-semibold hover:bg-coffee-800 transition">
              Proceder al Pago
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

