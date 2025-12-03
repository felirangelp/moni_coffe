import Link from 'next/link'
import { Coffee } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-coffee-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Coffee className="w-6 h-6" />
              <span className="text-lg font-bold">Moni Coffee</span>
            </Link>
            <p className="text-coffee-300 text-sm">
              Conectando productores de café con amantes del café en Netherlands.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm text-coffee-300">
              <li>
                <Link href="/products" className="hover:text-white transition">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/track" className="hover:text-white transition">
                  Rastrear Café
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  Sobre Nosotros
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Productores</h3>
            <ul className="space-y-2 text-sm text-coffee-300">
              <li>
                <Link
                  href="/producer/register"
                  className="hover:text-white transition"
                >
                  Registrarse
                </Link>
              </li>
              <li>
                <Link href="/producer/login" className="hover:text-white transition">
                  Iniciar Sesión
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <p className="text-sm text-coffee-300">
              Email: info@monicoffee.nl
              <br />
              Netherlands
            </p>
          </div>
        </div>

        <div className="border-t border-coffee-800 mt-8 pt-8 text-center text-sm text-coffee-300">
          <p>&copy; 2024 Moni Coffee. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

