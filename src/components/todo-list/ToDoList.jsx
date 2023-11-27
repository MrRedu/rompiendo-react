import { useState } from 'react'

export const ToDoList = () => {
  const [string, setString] = useState('')
  const [toDos, setToDos] = useState(['Foo', 'Bar', 'Baz'])

  const handleOnChange = e => {
    setString(e.target.value)
  }

  const handleOnSubmit = e => {
    e.preventDefault()

    if (!string) return alert('Please enter a toDo!')
    if (toDos.includes(string)) return alert('ToDo already exists!')

    setToDos(prev => [string, ...prev])
    setString('')
  }

  const todos = toDos.map(string => <li key={string}>{string}</li>)

  return (
    <>
      <h1>{`</useEstado>`}</h1>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '300px',
        }}
        action=""
        onSubmit={handleOnSubmit}
      >
        <label htmlFor="string">Add ToDo</label>
        <input
          onChange={handleOnChange}
          value={string}
          name="string"
          id="string"
          type="text"
          autoComplete="off"
        />
        <button type="submit" onClick={handleOnSubmit}>
          Add ToDo
        </button>
      </form>

      <ul>{todos}</ul>
    </>
  )
}
