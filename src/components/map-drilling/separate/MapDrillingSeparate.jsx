import propTypes from 'prop-types'

import styles from './MapDrillingSeparate.module.css'

const menu = [
  {
    id: 123,
    title: '1 - Menú',
    subMenu: [
      {
        title: '1-A - Submenu',
        routes: [
          {
            id: '1',
            title: '1-A 1 - Route',
          },
          {
            id: '2',
            title: '1-A 2 - Route',
          },
        ],
      },
      {
        title: '1-B - Submenu',
        routes: [
          {
            id: '1',
            title: '1-B 1 - Route',
          },
          {
            id: '2',
            title: '1-B 2 - Route',
          },
        ],
      },
    ],
  },
  {
    id: 456,
    title: '2 - Menú',
    subMenu: [
      {
        title: '2-A - Submenu',
        routes: [
          {
            id: '1',
            title: '2-A 1 - Route',
          },
          {
            id: '2',
            title: '2-A 2 - Route',
          },
        ],
      },
      {
        title: '2-B - Submenu',
        routes: [
          {
            id: '1',
            title: '2-B 1 - Route',
          },
          {
            id: '2',
            title: '2-B 2 - Route',
          },
        ],
      },
    ],
  },
  {
    id: 789,
    title: '3 - Menú',
    subMenu: [
      {
        title: '3-A - Submenu',
        routes: [
          {
            id: '1',
            title: '3-A 1 - Route',
          },
          {
            id: '2',
            title: '3-A 2 - Route',
          },
        ],
      },
      {
        title: '3-B - Submenu',
        routes: [
          {
            id: '1',
            title: '3-B 1 - Route',
          },
          {
            id: '2',
            title: '3-B 2 - Route',
          },
        ],
      },
    ],
  },
]

const Menu = ({ title, children }) => {
  return (
    <>
      <div className={styles.menu}>
        <span>{title}</span>
        {children}
      </div>
    </>
  )
}

const SubMenu = ({ title, children }) => {
  return (
    <>
      <div className={styles['sub-menu']}>
        <span>{title}</span>
        {children}
      </div>
    </>
  )
}

const Route = ({ title }) => {
  return (
    <>
      <div className={styles.routes}>
        <span>{title}</span>
      </div>
    </>
  )
}

export const MapDrillingSeparate = () => {
  return (
    <>
      <h1>{`</MapDrillingSeparate>`}</h1>
      {menu.map(({ id, title, subMenu }) => (
        <Menu key={id} title={title}>
          {subMenu.map(({ id, title, routes }) => (
            <SubMenu key={id} title={title}>
              {routes.map(({ id, title }) => (
                <Route key={id} title={title} />
              ))}
            </SubMenu>
          ))}
        </Menu>
      ))}
    </>
  )
}

MapDrillingSeparate.propTypes = {
  id: propTypes.string,
  title: propTypes.string,
  subMenu: propTypes.array,
  routes: propTypes.array,
}

Menu.propTypes = {
  title: propTypes.string,
  children: propTypes.array,
}

SubMenu.propTypes = {
  title: propTypes.string,
  children: propTypes.array,
}

Route.propTypes = {
  title: propTypes.string,
}
