import styles from './MapDrilling.module.css'

const menu = [
  {
    id: '1aaa',
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
    id: '2bbb',
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
]

export const MapDrilling = () => {
  return (
    <>
      <h1>{`</MapDrilling>`}</h1>
      {menu.map(({ id, title, subMenu }) => (
        <div className={styles.menu} key={id}>
          <span>{title}</span>
          {subMenu.map(({ id, title, routes }) => (
            <div className={styles['sub-menu']} key={id}>
              <span>{title}</span>
              {routes.map(({ id, title }) => (
                <div className={styles.routes} key={id}>
                  <span>{title}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </>
  )
}
