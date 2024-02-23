// const DEFAULT_LOCATION = {
//   latitude: 10.1587073,
//   longitude: -67.5611796,
// }

const API_KEY = `b8bd8b7f3bc5883ebaef68ff4c533254`

export const getWeather = async ({ latitude, longitude }) => {
  if (!latitude || !longitude) return

  try {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`

    const res = await fetch(URL)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getForecastWeather = async ({ latitude, longitude }) => {
  if (!latitude || !longitude) return

  const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
  try {
    const res = await fetch(URL)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
