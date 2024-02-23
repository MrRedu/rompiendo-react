import { useState, useEffect } from 'react'
import useLocation from '../../hooks/useLocation'
import { getForecastWeather, getWeather } from '../../services/weather'

export const WeatherApp = () => {
  const { myLocation } = useLocation()
  const { latitude, longitude } = myLocation || {}
  const [weather, setWeather] = useState()
  const [forecastWeather, setForecastWeather] = useState()

  // useWeather => this is a custom hook
  useEffect(() => {
    const getWeatherData = async () => {
      const data = await getWeather({ latitude, longitude })
      setWeather(data)
    }
    const getForecastData = async () => {
      const data = await getForecastWeather({ latitude, longitude })
      setForecastWeather(data)
    }

    getWeatherData()
    getForecastData()
  }, [latitude, longitude])

  // console.log({ weather, forecastWeather })

  return (
    <>
      <h1>{`</WeatherApp>`}</h1>
      {latitude && longitude && (
        <span style={{ color: 'green' }}>
          {latitude}, {longitude}
        </span>
      )}
      <br />
      {weather && (
        <pre style={{ color: 'red' }}>{JSON.stringify(weather, null, 2)}</pre>
      )}
      <br />
      {forecastWeather && (
        <pre style={{ color: 'yellow' }}>
          {JSON.stringify(forecastWeather, null, 2)}
        </pre>
      )}
    </>
  )
}
