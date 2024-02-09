import { useState } from 'react'

const formDataInitialState = {
  name: '',
  email: '',
  companyName: '',
  services: [
    {
      id: '1',
      name: 'Landing page',
      value: 'landing-page',
      checked: false,
    },
    {
      id: '2',
      name: 'Website development',
      value: 'website-development',
      checked: false,
    },
    {
      id: '3',
      name: 'E-commerce',
      value: 'e-commerce',
      checked: false,
    },
    {
      id: '4',
      name: 'Consulting',
      value: 'consulting',
      checked: false,
    },
  ],
  message: '',
}

export const StateInMultipleCheckBoxes = () => {
  const [formData, setFormData] = useState(formDataInitialState)

  const handleServiceChange = id => {
    setFormData(prev => {
      const updatedServices = prev.services.map(service => {
        if (service.id === id) {
          return { ...service, checked: !service.checked }
        }
        return service
      })
      return { ...prev, services: updatedServices }
    })
  }

  return (
    <>
      <h2>{`</stateInMultipleCheckBoxs>`}</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {formData.services.map(({ id, name, value, checked }) => (
          <label key={id}>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => handleServiceChange(id)}
            />
            {name}
          </label>
        ))}
      </div>
      <div>
        {formData.services.map(({ id, name, value, checked }) => (
          <p key={id}>{`${name}: ${checked}`}</p>
        ))}
      </div>
    </>
  )
}
