export const getWeather = async ({ latitude, longitude }) => {
  if (!latitude || !longitude) return

  try {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b8bd8b7f3bc5883ebaef68ff4c533254`

    const res = await fetch(URL)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
