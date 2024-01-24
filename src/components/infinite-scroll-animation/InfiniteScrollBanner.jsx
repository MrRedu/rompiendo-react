// https://www.youtube.com/watch?v=iLmBy-HKIAw

import propTypes from 'prop-types'

import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import styles from './InfiniteScrollBanner.module.css'

const ITEMS = [
  'HTML',
  'CSS3',
  'JavaScript',
  'WebDev',
  'React',
  'Next.js',
  'Animation',
  'UI/UX',
] // this come from an API or database

const duplicatedItems = [...ITEMS, ...ITEMS, ...ITEMS]

export const InfiniteScrollBanner = ({
  direction = 'right',
  speed = 'fast',
}) => {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <>
      <div
        className={`${styles.scroller} 
      ${
        prefersReducedMotion
          ? styles['reduced-motion']
          : styles['normal-motion']
      } 
      ${direction === 'right' ? styles['to-right'] : styles['to-left']}
      ${speed === 'fast' ? styles.fast : styles.slow}
      `}
      >
        <ul className={`${styles['tag-list']} ${styles['scroller-inner']}`}>
          {duplicatedItems.map(item => (
            <li key={item} className={styles['tag-item']}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

InfiniteScrollBanner.propTypes = {
  direction: propTypes.string,
  speed: propTypes.string,
}
