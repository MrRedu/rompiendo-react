import propTypes from 'prop-types'
import { useState } from 'react'

const IDs = ({ ids }) => {
  return (
    <>
      <h1>IDs</h1>
      <ul>{ids && ids.map(id => <li key={id}>{id}</li>)}</ul>
    </>
  )
}

export const LocalStorage = () => {
  const [text, setText] = useState('')

  const handleChange = e => {
    e.preventDefault()
    setText(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    establecerStorage(text)
    setText('')
  }

  const [storage, setStorage] = useState(() => {
    try {
      const item = localStorage.getItem('idGif')
      return item ? JSON.parse(item) : []
    } catch (error) {
      console.error(error)
      return []
    }
  })

  const establecerStorage = text => {
    const actualLocalStorage = JSON.parse(localStorage.getItem('idGif'))

    if (!actualLocalStorage) {
      localStorage.setItem('idGif', JSON.stringify([text]))
      setStorage(prev => [text, ...prev])
      return
    }

    const arrayConElNuevo = [text, ...actualLocalStorage]
    localStorage.setItem('idGif', JSON.stringify(arrayConElNuevo))
    setStorage(prev => [text, ...prev])
  }

  return (
    <>
      <h1>{`</LocalStorage>`}</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={text} name="name" onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      <IDs ids={storage} />
    </>
  )
}
IDs.propTypes = {
  ids: propTypes.array,
}
