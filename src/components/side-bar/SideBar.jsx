import propTypes from 'prop-types'
import styles from './SideBar.module.css'

const User = ({ name, lastname, email, avatar }) => {
  return (
    <div className={styles.user}>
      <img
        src={avatar}
        alt={`${name} ${lastname} avatar`}
        className={styles.avatar}
      />
      <div className={styles.info}>
        <span className={styles.name}>
          {name} {lastname}
        </span>
        <span className={styles.email}>{email}</span>
      </div>
    </div>
  )
}

const ListItem = ({ path, title, icon }) => {
  return (
    <li className={styles['list-item']}>
      <a href={path} className={styles.link}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.title}>{title}</span>
      </a>
    </li>
  )
}

const List = ({ children }) => {
  return <ul className={styles.list}>{children}</ul>
}

const Section = ({ children, title }) => {
  return (
    <div className={styles.section}>
      <span className={styles['section-title']}>{title}</span>
      {children}
    </div>
  )
}

export const SideBar = ({ children }) => {
  return <div className={styles['side-bar']}>{children}</div>
}

SideBar.Section = Section
SideBar.List = List
SideBar.ListItem = ListItem
SideBar.User = User

Section.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
}

SideBar.propTypes = {
  children: propTypes.node,
}

List.propTypes = {
  children: propTypes.node,
}

ListItem.propTypes = {
  path: propTypes.string,
  title: propTypes.string,
}
