'use client'

import { useState } from 'react'
import { ShoppingCart } from 'lucide-react'

interface AddToCartButtonProps {
  productId: string
  stock: number
}

export function AddToCartButton({ productId, stock }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = async () => {
    if (stock === 0) {
      alert('No hay stock disponible')
      return
    }

    setIsAdding(true)
    // TODO: Implementar lógica de carrito
    // Por ahora solo simulamos
    setTimeout(() => {
      setIsAdding(false)
      alert('Producto agregado al carrito')
    }, 500)
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center border rounded-lg">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="px-4 py-2 hover:bg-gray-100"
          disabled={quantity <= 1}
        >
          -
        </button>
        <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
        <button
          onClick={() => setQuantity(Math.min(stock, quantity + 1))}
          className="px-4 py-2 hover:bg-gray-100"
          disabled={quantity >= stock}
        >
          +
        </button>
      </div>

      <button
        onClick={handleAddToCart}
        disabled={isAdding || stock === 0}
        className="flex items-center gap-2 bg-coffee-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-coffee-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ShoppingCart className="w-5 h-5" />
        {isAdding ? 'Agregando...' : stock === 0 ? 'Sin Stock' : 'Agregar al Carrito'}
      </button>
    </div>
  )
}

