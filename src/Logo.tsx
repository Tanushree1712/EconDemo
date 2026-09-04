import React from 'react'

interface LogoProps {
  size?: number
  className?: string
  style?: React.CSSProperties
}

export default function Logo({ size = 42, className, style }: LogoProps) {
  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #2d1c12 0%, #150c07 100%)',
        border: '1.5px solid rgba(232, 180, 114, 0.45)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
        flexShrink: 0,
        ...style,
      }}
    >
      <svg
        width={Math.round(size * 0.58)}
        height={Math.round(size * 0.58)}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#e8b472"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 17h18" />
        <path d="M5 17c0-3.87 3.13-7 7-7s7 3.13 7 7" />
        <path d="M12 10V7" />
        <circle cx="12" cy="6" r="1" fill="#e8b472" />
        <path d="M7 20h10" strokeWidth="1.5" />
      </svg>
    </div>
  )
}
