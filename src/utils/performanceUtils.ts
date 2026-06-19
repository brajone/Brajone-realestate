// Utility for virtual scrolling
export const VirtualScroll = {
  // Calculate visible items based on scroll position
  getVisibleItems: (items: any[], itemHeight: number, containerHeight: number, scrollTop: number) => {
    const startIndex = Math.floor(scrollTop / itemHeight)
    const endIndex = Math.ceil((scrollTop + containerHeight) / itemHeight)
    return { startIndex, endIndex, visibleItems: items.slice(startIndex, endIndex) }
  },

  // Calculate scroll position
  getScrollPosition: (index: number, itemHeight: number, containerHeight: number) => {
    return index * itemHeight - containerHeight / 2
  },
}

// Utility for memoization
export const useShallowMemo = (value: any, deps: any[]) => {
  const prevValue = React.useRef(value)
  const prevDeps = React.useRef(deps)

  if (!deps.every((dep, i) => Object.is(dep, prevDeps.current?.[i]))) {
    prevValue.current = value
    prevDeps.current = deps
  }

  return prevValue.current
}
