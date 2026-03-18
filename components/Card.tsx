import React from 'react'
import Link from 'next/link'

interface CardProps {
  title: string
  description: string
  icon?: React.ReactNode
  buttonText?: string
  href?: string
  className?: string
}

export default function Card({
  title,
  description,
  icon,
  buttonText,
  href,
  className = '',
}: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${className}`}>
      {icon && (
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
      )}

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>

      {buttonText && href && (
        <Link
          href={href}
          className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-block"
        >
          {buttonText} &rarr;
        </Link>
      )}
    </div>
  )
}