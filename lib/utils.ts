import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateQRCode(): string {
  // Genera un código único para el QR
  return `MONI-${Date.now()}-${Math.random().toString(36).substring(2, 9).toUpperCase()}`
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
  }).format(price)
}

// Helper functions para manejar imágenes como JSON en SQLite
export function parseImages(imagesJson: string | null | undefined): string[] {
  if (!imagesJson || imagesJson === '[]') return []
  try {
    return JSON.parse(imagesJson)
  } catch {
    return []
  }
}

export function stringifyImages(images: string[]): string {
  return JSON.stringify(images || [])
}

