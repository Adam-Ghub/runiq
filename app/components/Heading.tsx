import React from 'react'

interface HeadingProps {
  title: string
  titleHighlight: string
  description: string
  className?: string
}

export default function Heading({ title, titleHighlight, description, className }: HeadingProps) {
  return (
    <div className={`flex flex-col items-center text-center mb-12 ${className}`}>
      <h1 className="text-5xl sm:text-6xl font-extrabold text-black tracking-tight leading-[1.1]">
        {title}<br />
        <span className="text-blue">{titleHighlight}</span>
      </h1>

      <p className="mt-8 text-base text-gray-600 max-w-2xl leading-relaxed">
        {description}
      </p>
    </div>
  )
}