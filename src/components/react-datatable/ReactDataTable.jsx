import DataTable from 'react-data-table-component'

import DATA from '../../mocks/reactdatatable.json'
import { useState, useEffect, useCallback, useMemo } from 'react'

const columns = [
  {
    name: 'Title',
    selector: row => row.title,
    reorder: true,
  },
  {
    name: 'Year',
    selector: row => row.year,
    reorder: true,
  },
  {
    name: 'IP V.4',
    selector: row => row.ip_v4,
    reorder: true,
  },
]

export const ReactDataTable = () => {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setData(DATA)
      setLoading(false)
    }, 500)

    return () => clearTimeout(timeOut)
  }, [])

  const handleChange = e => {
    const str = e.target.value.trim()
    setQuery(str)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (query === '') return setData(DATA)

    const filteredData = data.filter(data =>
      data.title.toLowerCase().includes(query.toLocaleLowerCase())
    )
    setData(filteredData)
  }

  const handleRowSelected = useCallback(state => {
    setSelectedRows(state.selectedRows)
  }, [])

  const [selectedRows, setSelectedRows] = useState([])
  const [toggleCleared, setToggleCleared] = useState(false)

  const contextActions = useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            r => r.title
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared)
      }
    }

    return (
      <>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleDelete}>Delete</button>
      </>
    )
  }, [data, selectedRows, toggleCleared])

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          placeholder="Buscar por título..."
          name="query"
          onChange={handleChange}
        />
      </form>

      <DataTable
        title="Title"
        columns={columns}
        data={data}
        pagination
        fixedHeader
        progressPending={loading}
        progressComponent={<h1>Cargando...</h1>}
        selectableRows
        contextActions={contextActions}
        onSelectedRowsChange={handleRowSelected}
        clearSelectedRows={toggleCleared}
      />
    </>
  )
}
