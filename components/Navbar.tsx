'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Coffee, User, ShoppingCart } from 'lucide-react'

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Coffee className="w-8 h-8 text-coffee-700" />
            <span className="text-xl font-bold text-coffee-900">Moni Coffee</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/products"
              className={`${
                pathname === '/products'
                  ? 'text-coffee-700 font-semibold'
                  : 'text-gray-700 hover:text-coffee-700'
              } transition`}
            >
              Productos
            </Link>
            <Link
              href="/track"
              className={`${
                pathname === '/track'
                  ? 'text-coffee-700 font-semibold'
                  : 'text-gray-700 hover:text-coffee-700'
              } transition`}
            >
              Rastrear
            </Link>
            <Link
              href="/producer/login"
              className="text-gray-700 hover:text-coffee-700 transition"
            >
              Panel Productor
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/cart"
              className="p-2 text-gray-700 hover:text-coffee-700 transition"
            >
              <ShoppingCart className="w-6 h-6" />
            </Link>
            <Link
              href="/login"
              className="flex items-center space-x-1 text-gray-700 hover:text-coffee-700 transition"
            >
              <User className="w-5 h-5" />
              <span className="hidden sm:inline">Iniciar Sesión</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

