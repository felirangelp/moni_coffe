import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { generateQRCode, stringifyImages } from '@/lib/utils'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name,
      description,
      origin,
      variety,
      process,
      altitude,
      price,
      stock,
      images,
      producerId, // En producción, esto vendría de la sesión
    } = body

    // Validar campos requeridos
    if (!name || !description || !origin || !price || stock === undefined) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // TODO: Obtener producerId de la sesión autenticada
    // Por ahora, usamos un ID hardcodeado para desarrollo
    if (!producerId) {
      return NextResponse.json(
        { error: 'Productor no identificado' },
        { status: 401 }
      )
    }

    // Generar código QR único
    const qrCode = generateQRCode()

    // Crear producto
    const product = await prisma.product.create({
      data: {
        producerId,
        name,
        description,
        origin,
        variety: variety || null,
        process: process || null,
        altitude: altitude || null,
        price: parseFloat(price),
        stock: parseInt(stock),
        images: stringifyImages(images || []),
        qrCode,
        isActive: true,
      },
    })

    return NextResponse.json(
      { message: 'Producto creado exitosamente', product },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error al crear producto:', error)
    return NextResponse.json(
      { error: 'Error al crear producto' },
      { status: 500 }
    )
  }
}

