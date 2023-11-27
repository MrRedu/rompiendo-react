## Estructura del hook UseContext()

```jsx
// XxxxxContext.jsx

import { createContext } from 'react'
export const XxxxxContext = createContext()
```

```jsx
// XxxxxxState.jsx

const initialState = {} / []

export const XxxxxState = ({ children }) => {
  const [state, dispatch] = useReducer(XxxxxReducer, initialState)

  const getState = async () => {
    // // probably a fetch
  }

  return (
    <XxxxxContext.Provider
      value={{
        key: value
        getState
      }}
    >
      {children}
    </XxxxxContext.Provider>
  )
}
```

```jsx
// types.js

export const GET_XXXXX = 'GET_XXXXX'
```

```jsx
// XxxxxReducer.jsx

import { GET_XXXXX } from './types'

export const UserReducer = (state, action) => {
  const { payload, type } = action

  switch (type) {
    case GET_XXXX:
      return {
        ...state,
        key: payload,
      }
    default:
      return state
  }
}
```

```jsx
// ParentComponent.jsx / AppPage.jsx

import { XxxxxState } from './context/XxxxxState'

export const ParentComponent = () => {
  return (
    <>
      <h1>Title</h1>
      <XxxxxState>
        {' '}
        {/* <- Wrapper */}
        <ChildComponent />
        <ChildComponent2 />
      </XxxxxState>
    </>
  )
}
```

```jsx
// ChildComponent.jsx

import { XxxxxContext } from './context/XxxxxContext'

export const ChildComponent = () => {
  const { getState, state } = useContext(XxxxxContext)

  useEffect(() => {
    getState()
  }, [])

  return (
    <>
      {state.map(({ id, property }) => (
        <>
          <p>{property}</p>
        </>
      ))}
    </>
  )
}
```

```jsx
// AnotherChildComponent.jsx

import { XxxxxContext } from './context/XxxxxContext'

export const AnotherChildComponent = () => {
  const { state } = useContext(XxxxxContext)

  return (
    <>
      {state.map(({ id, property }) => (
        <>
          <p>{property}</p>
        </>
      ))}
    </>
  )
}
```
