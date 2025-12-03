import { NextRequest, NextResponse } from 'next/server'
import { createUser } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      password,
      role,
      farmName,
      location,
      country,
      description,
    } = body

    // Validar campos requeridos
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Verificar si el usuario ya existe
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'El email ya está registrado' },
        { status: 400 }
      )
    }

    // Crear usuario
    const user = await createUser(email, password, name, role)

    // Si es productor, crear perfil de productor
    if (role === 'PRODUCER') {
      if (!farmName || !location || !country) {
        return NextResponse.json(
          { error: 'Faltan datos de la finca' },
          { status: 400 }
        )
      }

      await prisma.producer.create({
        data: {
          userId: user.id,
          farmName,
          location,
          country,
          description: description || null,
          images: '[]',
        },
      })
    }

    return NextResponse.json(
      { message: 'Usuario registrado exitosamente', userId: user.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error en registro:', error)
    return NextResponse.json(
      { error: 'Error al registrar usuario' },
      { status: 500 }
    )
  }
}

