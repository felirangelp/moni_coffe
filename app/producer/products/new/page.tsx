'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Upload, X } from 'lucide-react'

export default function NewProductPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    origin: '',
    variety: '',
    process: '',
    altitude: '',
    price: '',
    stock: '',
  })
  const [images, setImages] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    // TODO: Implement actual image upload
    // For now, just simulate
    Array.from(files).forEach((file) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImages([...images, reader.result as string])
      }
      reader.readAsDataURL(file)
    })
  }

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // TODO: Implement API call
      const res = await fetch('/api/producer/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          images: images, // Ya es un array, se convertirá a JSON en el API
          price: parseFloat(formData.price),
          stock: parseInt(formData.stock),
          altitude: formData.altitude ? parseInt(formData.altitude) : null,
        }),
      })

      if (res.ok) {
        router.push('/producer/dashboard')
      } else {
        const data = await res.json()
        setError(data.error || 'Error al crear producto')
      }
    } catch (err) {
      setError('Error de conexión')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-coffee-900 mb-8">
        Nuevo Producto
      </h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Nombre del Producto *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-500"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Descripción *
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-500"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="origin" className="block text-sm font-medium text-gray-700 mb-2">
              Origen (Finca/Región) *
            </label>
            <input
              id="origin"
              name="origin"
              type="text"
              value={formData.origin}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-500"
            />
          </div>

          <div>
            <label htmlFor="variety" className="block text-sm font-medium text-gray-700 mb-2">
              Variedad
            </label>
            <input
              id="variety"
              name="variety"
              type="text"
              value={formData.variety}
              onChange={handleChange}
              placeholder="Ej: Caturra, Typica, Bourbon"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="process" className="block text-sm font-medium text-gray-700 mb-2">
              Proceso
            </label>
            <input
              id="process"
              name="process"
              type="text"
              value={formData.process}
              onChange={handleChange}
              placeholder="Ej: Lavado, Natural, Honey"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-500"
            />
          </div>

          <div>
            <label htmlFor="altitude" className="block text-sm font-medium text-gray-700 mb-2">
              Altitud (metros)
            </label>
            <input
              id="altitude"
              name="altitude"
              type="number"
              value={formData.altitude}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
              Precio (EUR) *
            </label>
            <input
              id="price"
              name="price"
              type="number"
              step="0.01"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-500"
            />
          </div>

          <div>
            <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-2">
              Stock *
            </label>
            <input
              id="stock"
              name="stock"
              type="number"
              value={formData.stock}
              onChange={handleChange}
              required
              min="0"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Imágenes del Producto
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="cursor-pointer flex flex-col items-center justify-center"
            >
              <Upload className="w-8 h-8 text-gray-400 mb-2" />
              <span className="text-sm text-gray-600">
                Haz clic para subir imágenes
              </span>
            </label>
          </div>

          {images.length > 0 && (
            <div className="grid grid-cols-4 gap-4 mt-4">
              {images.map((img, index) => (
                <div key={index} className="relative aspect-square">
                  <img
                    src={img}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-full object-cover rounded"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex gap-4 pt-6">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-coffee-700 text-white py-3 rounded-lg font-semibold hover:bg-coffee-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creando...' : 'Crear Producto'}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  )
}

