import { EditableInput } from './EditableInput'
import { useForm } from './useForm'

export const EditableTask = () => {
  const { tasks, formData, handleChange, handleSubmit, handleTaskChange } =
    useForm()

  return (
    <>
      <h1>{`</EditableTask>`}</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          value={formData.title}
          name="title"
          placeholder="Title"
        />
        <input
          onChange={handleChange}
          type="text"
          name="description"
          value={formData.description}
          placeholder="Description"
        />
        <button type="submit">Save</button>
      </form>
      {tasks && <pre>{JSON.stringify(tasks, null, 2)}</pre>}
      {tasks && (
        <ul>
          {tasks.map((task, index) => (
            <li key={task.id}>
              <EditableInput
                value={task.title}
                type={'text'}
                onChange={value => handleTaskChange(index, 'title', value)}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
