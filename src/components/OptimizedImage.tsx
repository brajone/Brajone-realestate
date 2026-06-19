import { ImageHTMLAttributes, memo, forwardRef } from 'react'

interface OptimizedImageProps extends ImageHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
}

const OptimizedImage = forwardRef<HTMLImageElement, OptimizedImageProps>(
  ({ src, alt, width, height, priority = false, ...props }, ref) => {
    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        {...props}
        style={{
          contentVisibility: 'auto',
          ...props.style,
        }}
      />
    )
  }
)

OptimizedImage.displayName = 'OptimizedImage'

export default memo(OptimizedImage)
