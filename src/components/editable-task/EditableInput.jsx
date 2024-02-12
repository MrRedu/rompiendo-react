import propTypes from 'prop-types'
import { useState } from 'react'

export const EditableInput = ({ value, type, onChange }) => {
  const [editing, setEditing] = useState(false)
  const [inputValue, setInputValue] = useState(value)

  const handleInputChange = event => {
    setInputValue(event.target.value)
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      setEditing(false)
      onChange(inputValue)
    }
  }

  const handleClick = () => {
    setEditing(true)
  }

  return editing ? (
    <input
      type={type}
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      onBlur={() => {
        setEditing(false)
        onChange(inputValue)
      }}
      autoFocus
    />
  ) : (
    <span onClick={handleClick}>{value}</span>
  )
}

EditableInput.propTypes = {
  value: propTypes.string,
  type: propTypes.string,
  onChange: propTypes.func,
}

// import propTypes from 'prop-types'
// import { useState } from 'react'

// export const EditableInput = ({ value, type, onChange, ...props }) => {
//   const [isEditing, setIsEditing] = useState(false)
//   const turnOnEditing = () => setIsEditing(true)
//   const turnOffEditing = () => setIsEditing(false)

//   return (
//     <div>
//       <input
//         type={type}
//         value={value}
//         readOnly={!isEditing}
//         onClick={turnOnEditing}
//         onBlur={turnOffEditing}
//         onChange={onChange}
//       />
//       {/* <button>button</button> */}
//     </div>
//   )
// }

// EditableInput.propTypes = {
//   value: propTypes.string,
//   type: propTypes.string,
//   onChange: propTypes.func,
// }
