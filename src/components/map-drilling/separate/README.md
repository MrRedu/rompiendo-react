## ¿Qué necesitamos?

Componente que renderice hijos, mediante .map(), pero de estos hijos solo puede estar uno abierto al mismo tiempo. Por lo que al intentar abrir otro, debe cerrarse el anterior.

## ¿Qué resolvemos acá?

A pesar de tener el estado en el componente padre, mediante la función `handleOnClickToChildren()`, podemos hacer que solo se abra uno al mismo tiempo.

```jsx
import { useState } from 'react'

function ParentComponent() {
  const [openComponentId, setOpenComponentId] = useState(null)

  const handleOnClickToChildren = componentId => {
    setOpenComponentId(prev => (prev === componentId ? null : componentId))
  }

  return (
    <>
      {data.map(component => (
        <ChildrenComponent
          key={component.id}
          isOpen={openComponentId === component.id}
          onClick={() => handleOnClickToChildren(component.id)}
        >
          {component.children}
        </ChildrenComponent>
      ))}
    </>
  )
}

function ChildrenComponent({ isOpen, onClick, children }) {
  return (
    <div onClick={onClick}>
      {/* component content */}
      {isOpen && <div>{children}</div>}
    </div>
  )
}
```
