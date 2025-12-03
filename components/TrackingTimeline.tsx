'use client'

import { format } from 'date-fns'
import { CheckCircle2 } from 'lucide-react'

interface Stage {
  stage: string
  description: string
  timestamp: Date
  location?: string
  images?: string[]
}

interface TrackingTimelineProps {
  stages: Stage[]
}

const stageLabels: Record<string, string> = {
  cultivo: 'Cultivo',
  cosecha: 'Cosecha',
  procesamiento: 'Procesamiento',
  empaque: 'Empaque',
  envío: 'Envío',
  entrega: 'Entrega',
}

export function TrackingTimeline({ stages }: TrackingTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-coffee-200"></div>
      <div className="space-y-8">
        {stages.map((stage, index) => (
          <div key={index} className="relative flex gap-6">
            <div className="relative z-10">
              {index === stages.length - 1 ? (
                <div className="w-12 h-12 bg-coffee-700 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
              ) : (
                <div className="w-12 h-12 bg-coffee-200 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-coffee-700" />
                </div>
              )}
            </div>
            <div className="flex-1 pb-8">
              <div className="bg-coffee-50 rounded-lg p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-coffee-900">
                    {stageLabels[stage.stage] || stage.stage}
                  </h3>
                  <span className="text-sm text-gray-600">
                    {format(new Date(stage.timestamp), "d 'de' MMMM, yyyy")}
                  </span>
                </div>
                <p className="text-gray-700 mb-2">{stage.description}</p>
                {stage.location && (
                  <p className="text-sm text-gray-600">
                    📍 {stage.location}
                  </p>
                )}
                {stage.images && stage.images.length > 0 && (
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {stage.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="aspect-square bg-gray-200 rounded overflow-hidden"
                      >
                        {/* Image component would go here */}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

