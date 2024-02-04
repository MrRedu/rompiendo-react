// https://github.com/tbleckert/react-select-search/tree/main

import 'react-select-search/style.css'
import SelectSearch from 'react-select-search'

const options = [
  {
    name: 'Work',
    value: 'work',
  },
  {
    name: 'Red',
    value: 'red',
  },
  {
    name: 'Blue',
    value: 'blue',
  },
  {
    name: 'Purple',
    value: 'purple',
  },
  {
    name: 'Yellow',
    value: 'yellow',
  },
]

export const ReactSelectSearch = () => {
  return (
    <SelectSearch
      options={options}
      value="sv"
      name="category"
      placeholder="Choose your category"
    />
  )
}
