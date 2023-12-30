import { useState } from 'react'

const Users = () => {
  const myStorage = window.localStorage
  const users = JSON.parse(myStorage.getItem('users'))

  return (
    <>
      <h1>Users</h1>
      <ul>{users && users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
    </>
  )
}

export const LocalStorage = () => {
  const myStorage = window.localStorage

  const [name, setName] = useState('')

  const handleChange = e => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    const user = {
      id: Math.random(),
      name,
      email: 'a@b.com',
    }

    if (myStorage.length === 0) {
      // Si el storage esta vacío, creamos el primer usuario dentro de un Array
      myStorage.setItem('users', JSON.stringify([user]))
    } else {
      // Si el storage tiene elementos, agregamos el nuevo usuario

      // Obtenemos el item 'users' del storage, lo parseamos para que se pueda leer como un array de objetos
      const users = JSON.parse(myStorage.getItem('users'))
      // Agregamos el nuevo usuario
      users.push(user)
      // Guardamos el array de usuarios en el storage con el nuevo valor; el array fue convertido a un string con JSON.stringify
      myStorage.setItem('users', JSON.stringify(users))
    }

    setName('')
  }

  // console.log(JSON.parse(myStorage.getItem('users')))
  // myStorage.clear()

  return (
    <>
      <h1>{`</LocalStorage>`}</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={name} name="name" onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      <Users />
    </>
  )
}
