'use client'

import { useState, useRef, useEffect } from 'react'
import { QrCode, Camera } from 'lucide-react'

interface QRCodeScannerProps {
  onScan: (code: string) => void
}

export function QRCodeScanner({ onScan }: QRCodeScannerProps) {
  const [isScanning, setIsScanning] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const streamRef = useRef<MediaStream | null>(null)

  const startScanning = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
      })
      streamRef.current = stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        setIsScanning(true)
      }
    } catch (error) {
      console.error('Error accessing camera:', error)
      alert('No se pudo acceder a la cámara. Por favor, ingresa el código manualmente.')
    }
  }

  const stopScanning = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }
    setIsScanning(false)
  }

  useEffect(() => {
    return () => {
      stopScanning()
    }
  }, [])

  // Nota: Para una implementación completa, necesitarías una librería como
  // @zxing/library o html5-qrcode para decodificar el QR desde el video
  // Por ahora, esto es una interfaz básica

  return (
    <div className="space-y-4">
      {!isScanning ? (
        <button
          onClick={startScanning}
          className="w-full bg-coffee-700 text-white px-6 py-4 rounded-lg font-semibold hover:bg-coffee-800 transition flex items-center justify-center gap-2"
        >
          <Camera className="w-5 h-5" />
          Activar Escáner de Código QR
        </button>
      ) : (
        <div className="space-y-4">
          <div className="relative bg-black rounded-lg overflow-hidden">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 border-4 border-coffee-500 rounded-lg pointer-events-none">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-coffee-500"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-coffee-500"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-coffee-500"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-coffee-500"></div>
            </div>
          </div>
          <button
            onClick={stopScanning}
            className="w-full bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
          >
            Detener Escaneo
          </button>
          <p className="text-sm text-gray-600 text-center">
            Apunta la cámara al código QR del producto
          </p>
        </div>
      )}
    </div>
  )
}

