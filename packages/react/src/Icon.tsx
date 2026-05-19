import React from 'react'
import { icons, CDN_BASE, type IconName } from './icons.gen'
import type { IconProps } from './types'

declare const __ICON_VERSION__: string

function resolveSize(available: number[], requested: number): number {
  return available.find(s => s >= requested) ?? available[available.length - 1]
}

interface BaseIconProps extends IconProps {
  name: IconName
  version?: string
}

export function Icon({
  name,
  size = 24,
  version = __ICON_VERSION__,
  shadow = false,
  shadowColor = 'rgba(0,0,0,0.2)',
  shadowX = 0,
  shadowY = 4,
  shadowBlur = 8,
  className,
  style,
  alt,
  onClick,
}: BaseIconProps) {
  const available = [...icons[name]]
  const asset = resolveSize(available, size)
  const src = `${CDN_BASE}@${version}/icons/${name}/${asset}.png`

  const filter = shadow
    ? `drop-shadow(${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowColor})`
    : undefined

  return (
    <img
      src={src}
      width={size}
      height={size}
      alt={alt ?? name}
      draggable={false}
      className={className}
      onClick={onClick}
      style={{
        display: 'inline-block',
        ...(filter && { filter }),
        ...style,
      }}
    />
  )
}
