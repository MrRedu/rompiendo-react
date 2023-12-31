import { useState } from 'react'

export function useLocalStorage({ key, initialValue  }) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  const setValue = value => {
    try {
      setStoredValue(prev => [value, ...prev])
      localStorage.setItem(key, value)
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue]
}
