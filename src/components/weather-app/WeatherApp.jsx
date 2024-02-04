import { useState, useEffect } from 'react'
import useLocation from '../../hooks/useLocation'
import { getWeather } from '../../services/weather'

export const WeatherApp = () => {
  const { myLocation } = useLocation()
  const { latitude, longitude } = myLocation || {}
  const [weather, setWeather] = useState()

  // useWeather => this is a custom hook
  useEffect(() => {
    const getWeatherData = async () => {
      const data = await getWeather({ latitude, longitude })
      setWeather(data)
    }
    getWeatherData()
  }, [latitude, longitude])

  return (
    <>
      <h1>{`</WeatherApp>`}</h1>
      {latitude && longitude && (
        <>
          <span>{latitude}</span>
          <span>{longitude}</span>
        </>
      )}
      {weather && JSON.stringify(weather, null, 2)}
    </>
  )
}
