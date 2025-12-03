'use client'

import { QRCodeSVG } from 'qrcode.react'

interface QRCodeDisplayProps {
  qrCode: string
  size?: number
}

export function QRCodeDisplay({ qrCode, size = 200 }: QRCodeDisplayProps) {
  const url = `${typeof window !== 'undefined' ? window.location.origin : ''}/track?qr=${qrCode}`

  return (
    <div className="flex flex-col items-center p-4 bg-white border-2 border-coffee-200 rounded-lg">
      <QRCodeSVG value={url} size={size} />
      <p className="mt-4 text-xs text-gray-600 text-center max-w-xs">
        Escanea este código para rastrear el origen de tu café
      </p>
      <p className="mt-2 text-xs font-mono text-coffee-700">{qrCode}</p>
    </div>
  )
}

