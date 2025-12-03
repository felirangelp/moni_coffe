import Link from 'next/link'
import { Coffee, MapPin, QrCode, Users } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-coffee-800 via-coffee-700 to-coffee-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Café de Origen con Trazabilidad Completa
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-coffee-100">
            Conoce la historia detrás de cada grano. Desde el productor hasta tu taza.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/products"
              className="bg-white text-coffee-800 px-8 py-3 rounded-lg font-semibold hover:bg-coffee-50 transition"
            >
              Ver Productos
            </Link>
            <Link
              href="/track"
              className="bg-coffee-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-coffee-500 transition border border-coffee-500"
            >
              Rastrear Café
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-coffee-900">
            ¿Por qué Moni Coffee?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-coffee-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-coffee-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-coffee-900">
                Origen Verificado
              </h3>
              <p className="text-gray-600">
                Cada café viene directamente de su origen, con información completa del productor.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-coffee-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <QrCode className="w-8 h-8 text-coffee-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-coffee-900">
                Trazabilidad Total
              </h3>
              <p className="text-gray-600">
                Escanea el código QR y sigue el viaje de tu café desde la finca hasta tu hogar.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-coffee-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-coffee-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-coffee-900">
                Historias Reales
              </h3>
              <p className="text-gray-600">
                Conoce a los productores, sus familias y la pasión detrás de cada grano.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-coffee-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-coffee-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-coffee-900">
                Calidad Premium
              </h3>
              <p className="text-gray-600">
                Solo café de la más alta calidad, seleccionado cuidadosamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-coffee-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-coffee-900">
            ¿Eres Productor de Café?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Únete a nuestra plataforma y comparte tu historia con el mundo.
            Llega a clientes en Netherlands que valoran el origen y la calidad.
          </p>
          <Link
            href="/producer/register"
            className="inline-block bg-coffee-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-coffee-800 transition"
          >
            Regístrate como Productor
          </Link>
        </div>
      </section>
    </div>
  )
}

