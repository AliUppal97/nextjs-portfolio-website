"use client"

import NextImage, { type ImageProps as NextImageProps } from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface ImageProps extends Omit<NextImageProps, "onLoad" | "onError"> {
  fallback?: string
  className?: string
}

export function Image({ src, alt, fallback, className, ...props }: ImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  if (hasError && fallback) {
    return (
      <NextImage
        src={fallback}
        alt={alt}
        className={cn("transition-opacity duration-300", className)}
        onLoad={handleLoad}
        {...props}
      />
    )
  }

  return (
    <div className="relative">
      <NextImage
        src={src}
        alt={alt}
        className={cn("transition-opacity duration-300", isLoading ? "opacity-0" : "opacity-100", className)}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
      {isLoading && <div className="absolute inset-0 bg-muted animate-pulse rounded-md" />}
    </div>
  )
}
