export function throttle<T extends (...args: any[]) => void>(
  callback: T,
  delay?: number
) {
  let throttleLock = false

  return function (...args: Parameters<T>) {
    if (throttleLock) return
    throttleLock = true

    setTimeout(() => {
      callback(...args)
      throttleLock = false
    }, delay || 25)
  }
}

export function debounce<T extends (...args: any[]) => void>(
  callback: T,
  delay?: number
) {
  let timer: ReturnType<typeof setTimeout>

  return function (...args: Parameters<T>) {
    clearTimeout(timer)

    timer = setTimeout(() => callback(...args), delay || 25)
  }
}

export function once<T extends (...args: any[]) => any>(
  callback: T,
  n?: number
) {
  let count = !n || n <= 0 ? 1 : n

  return function (
    ...args: Parameters<T>
  ): ReturnType<typeof callback> | undefined {
    if (count-- <= 0) return
    return callback(...args)
  }
}
