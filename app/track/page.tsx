'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { QRCodeScanner } from '@/components/QRCodeScanner'
import { TrackingTimeline } from '@/components/TrackingTimeline'
import { QrCode, Search } from 'lucide-react'

export default function TrackPage() {
  const searchParams = useSearchParams()
  const [qrCode, setQrCode] = useState<string | null>(
    searchParams.get('qr') || null
  )
  const [manualCode, setManualCode] = useState('')
  const [trackingData, setTrackingData] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    if (!manualCode.trim()) return

    setLoading(true)
    setQrCode(manualCode.trim())
    // TODO: Fetch tracking data from API
    setTimeout(() => {
      setLoading(false)
      // Simulated data
      setTrackingData({
        product: {
          name: 'Café Especial Finca La Esperanza',
          origin: 'Huila, Colombia',
        },
        stages: [
          {
            stage: 'cultivo',
            description: 'Cultivo en la finca',
            timestamp: new Date('2024-01-15'),
            location: 'Huila, Colombia',
          },
          {
            stage: 'cosecha',
            description: 'Cosecha manual selectiva',
            timestamp: new Date('2024-03-20'),
            location: 'Huila, Colombia',
          },
          {
            stage: 'procesamiento',
            description: 'Procesamiento lavado',
            timestamp: new Date('2024-03-25'),
            location: 'Huila, Colombia',
          },
          {
            stage: 'empaque',
            description: 'Empaque y etiquetado',
            timestamp: new Date('2024-04-01'),
            location: 'Bogotá, Colombia',
          },
          {
            stage: 'envío',
            description: 'Enviado a Netherlands',
            timestamp: new Date('2024-04-05'),
            location: 'En tránsito',
          },
        ],
      })
    }, 1000)
  }

  useEffect(() => {
    if (qrCode) {
      handleSearch()
    }
  }, [qrCode])

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-coffee-900 mb-4">
          Rastrear tu Café
        </h1>
        <p className="text-lg text-gray-600">
          Escanea el código QR de tu producto o ingresa el código manualmente
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-coffee-900 mb-4">
            Escanear Código QR
          </h2>
          <QRCodeScanner onScan={setQrCode} />
        </div>

        <div className="border-t pt-6">
          <h2 className="text-xl font-semibold text-coffee-900 mb-4">
            O Ingresa el Código Manualmente
          </h2>
          <div className="flex gap-4">
            <input
              type="text"
              value={manualCode}
              onChange={(e) => setManualCode(e.target.value)}
              placeholder="Ej: MONI-1234567890-ABC123"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-500"
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button
              onClick={handleSearch}
              disabled={loading || !manualCode.trim()}
              className="bg-coffee-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-coffee-800 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Search className="w-5 h-5" />
              {loading ? 'Buscando...' : 'Buscar'}
            </button>
          </div>
        </div>
      </div>

      {trackingData && (
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-coffee-900 mb-2">
              {trackingData.product.name}
            </h2>
            <p className="text-gray-600">{trackingData.product.origin}</p>
          </div>

          <TrackingTimeline stages={trackingData.stages} />
        </div>
      )}

      {qrCode && !trackingData && !loading && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
          <QrCode className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
          <p className="text-yellow-800">
            No se encontró información de seguimiento para este código.
          </p>
        </div>
      )}
    </div>
  )
}

