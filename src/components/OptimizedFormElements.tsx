import React, { memo, useState, useCallback, useMemo } from 'react'

// Memoized button component
const OptimizedButton = memo(({ onClick, children, className, ...props }: any) => {
  const handleClick = useCallback(() => {
    onClick?.()
  }, [onClick])

  return (
    <button
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </button>
  )
})

OptimizedButton.displayName = 'OptimizedButton'

// Memoized input component
const OptimizedInput = memo(({ onChange, value, ...props }: any) => {
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }, [onChange])

  return (
    <input
      value={value}
      onChange={handleChange}
      {...props}
    />
  )
})

OptimizedInput.displayName = 'OptimizedInput'

export { OptimizedButton, OptimizedInput }
