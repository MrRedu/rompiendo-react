import { useState } from 'react'

export function useForm() {
  const [tasks, setTasks] = useState([])
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    description: '',
  })

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const { title, description } = formData

    setTasks(prev => [
      {
        id: self.crypto.randomUUID(),
        title,
        description,
      },
      ...prev,
    ])
    setFormData({ id: '', title: '', description: '' })
  }

  const handleTaskChange = (index, key, value) => {
    const newTasks = [...tasks]
    newTasks[index][key] = value
    setTasks(newTasks)
  }

  return {
    tasks,
    formData,
    handleChange,
    handleSubmit,
    handleTaskChange
  }
}
