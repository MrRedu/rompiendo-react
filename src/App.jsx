// import { MapDrilling } from './components/map-drilling/MapDrilling'
// import { MapDrillingSeparate } from './components/map-drilling/separate/MapDrillingSeparate'
// import { ToDoList } from './components/todo-list/ToDoList'
// import { ContextApp } from './components/context/ContextApp'
// import { LocalStorage } from './components/local-storage/LocalStorage'
// import { CobeComponent } from './components/cobe/CobeComponent'
// import { CardSpotlight } from './components/card-spotlight/CardSpotlight'
// import { ReactSelectSearch } from "./components/react-select-search/ReactSelectSearch"
// import { InfiniteScrollBanner } from './components/infinite-scroll-animation/InfiniteScrollBanner'
// import { TestSpline } from './components/3d/test-1/TestSpline'
// import { WeatherApp } from './components/weather-app/WeatherApp'
// import { StateInMultipleCheckBoxes } from './components/stateInMultipleCheckBoxes/StateInMultipleCheckBoxes'
// import { EditableTask } from './components/editable-task/EditableTask'
// import { ReactDataTable } from './components/react-datatable/ReactDataTable'

import { SideBar } from './components/side-bar/SideBar'
import { MENU, USER } from './libs/const'

export const App = () => {
  return (
    <>
      <h1>{`</RompiendoCosas>`}</h1>
      <hr />
      {/* <MapDrilling /> */}
      {/* <MapDrillingSeparate /> */}
      {/* <ToDoList /> */}
      {/* <ContextApp /> */}
      {/* <LocalStorage /> */}
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
      {/* <InfiniteScrollBanner direction="left" speed="fast" /> */}
      {/* <InfiniteScrollBanner direction="right" speed="slow" /> */}
      {/* <TestSpline /> */}
      {/* <WeatherApp /> */}
      {/* <StateInMultipleCheckBoxes /> */}
      {/* <EditableTask /> */}
      {/* <ReactDataTable /> */}

      <SideBar>
        <SideBar.Section title="Section 1">
          <SideBar.List>
            {MENU.map(item => (
              <SideBar.ListItem
                key={item.path}
                path={item.path}
                title={item.title}
                icon={item.icon}
              />
            ))}
          </SideBar.List>
        </SideBar.Section>
        <SideBar.Section title="Section 2">
          <SideBar.List>
            {MENU.map(item => (
              <SideBar.ListItem
                key={item.path}
                path={item.path}
                title={item.title}
                icon={item.icon}
              />
            ))}
          </SideBar.List>
        </SideBar.Section>
        <SideBar.Section>
          <SideBar.User {...USER} />
        </SideBar.Section>
      </SideBar>
    </>
  )
}
