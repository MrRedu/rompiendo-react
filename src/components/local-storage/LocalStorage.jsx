// import { useState } from 'react'

import { useState } from 'react'

export const LocalStorage = () => {
  const myStorage = window.localStorage

  const objectsInitialValue = [
    {
      id: '1',
      name: 'John',
      isFavourite: false,
    },
    {
      id: '2',
      name: 'Jane',
      isFavourite: false,
    },
    {
      id: '3',
      name: 'Joe',
      isFavourite: false,
    },
    {
      id: '4',
      name: 'Jim',
      isFavourite: false,
    },
    {
      id: '5',
      name: 'Jill',
      isFavourite: false,
    },
  ]

  const [objects, setObjects] = useState(objectsInitialValue)

  const handleClick = ({ id, name }) => {
    console.log(id)

    if (myStorage.getItem(id)) {
      myStorage.removeItem(id)
    } else {
      myStorage.setItem(id, name)
    }
  }

  console.log(myStorage)

  return (
    <>
      <h1>{`</LocalStorage>`}</h1>
      <ul>
        {objects.map(item => (
          <li key={item.id} onClick={() => handleClick(item)}>
            <span style={{ cursor: 'pointer' }}>{item.name}</span>
            {item.isFavourite ? '❤️' : '🤍'}
          </li>
        ))}
      </ul>
    </>
  )
}
