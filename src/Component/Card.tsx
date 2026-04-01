
import { useState } from 'react'

interface CardProps {
  title: string
  description: string
  imageUrl: string
}

const Card = ({ title, description, imageUrl }: CardProps) => {
  const [src, setSrc] = useState(imageUrl)

  return (
    <div className="w-full md:w-[31%] bg-white rounded-xl shadow-lg overflow-hidden m-2 border border-gray-200 hover:-translate-y-1 transition-transform duration-300">
      <img
        className="h-44 w-full object-cover"
        src={src}
        alt={title}
        onError={() => setSrc('https://via.placeholder.com/600x400?text=Image+unavailable')}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default Card
