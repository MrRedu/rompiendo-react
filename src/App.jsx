// import { MapDrilling } from './components/map-drilling/MapDrilling'
// import { MapDrillingSeparate } from './components/map-drilling/separate/MapDrillingSeparate'
// import { ToDoList } from './components/todo-list/ToDoList'
// import { ContextApp } from './components/context/ContextApp'
import { LocalStorage } from './components/local-storage/LocalStorage'
// import { CobeComponent } from './components/cobe/CobeComponent'
// import { CardSpotlight } from './components/card-spotlight/CardSpotlight'
// import { ReactSelectSearch } from "./components/react-select-search/ReactSelectSearch"

export const App = () => {
  return (
    <>
      <h1>{`</RompiendoCosas>`}</h1>
      <hr />
      {/* <MapDrilling /> */}
      {/* <MapDrillingSeparate /> */}
      {/* <ToDoList /> */}
      {/* <ContextApp /> */}
      <LocalStorage />
      {/* <CobeComponent /> */}
      {/* <div
        style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          marginTop: '10rem',
        }}
      >
        <CardSpotlight>💪🏻</CardSpotlight>
        <CardSpotlight>⭐</CardSpotlight>
        <CardSpotlight>🍳</CardSpotlight>
        <CardSpotlight>📸</CardSpotlight>
        <CardSpotlight>🚧</CardSpotlight>
        <CardSpotlight>👕</CardSpotlight>
      </div> */}
      {/* <ReactSelectSearch /> */}
    </>
  )
}
