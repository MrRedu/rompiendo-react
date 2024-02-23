import propTypes from 'prop-types'
import { useState, useRef } from 'react'
import styles from './CardSpotlight.module.css'

export const CardSpotlight = ({ children }) => {
  const divRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)
  const [focused, setFocused] = useState(false)

  const handleMouseMove = e => {
    if (!divRef.current || focused) return

    const rect = divRef.current.getBoundingClientRect()

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const handleFocus = () => {
    setFocused(true)
    setOpacity(1)
  }

  const handleBlur = () => {
    setFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={divRef}
      className={styles.container}
    >
      <div
        className={styles.spotlight}
        style={{
          opacity: `${opacity}`,
          background: `
          radial-gradient(600px circle at 
            ${position.x}px ${position.y}px, 
            rgba(60, 60, 60, 0.2), 
            transparent 30%)
            `,
        }}
      />
      {children}
    </div>
  )
}

CardSpotlight.propTypes = {
  children: propTypes.node.isRequired,
}
