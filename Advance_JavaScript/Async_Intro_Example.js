function weatherData () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Weather Information')
      resolve(200)
    }, 3000)
  })
}

async function getWeatherData () {
  await weatherData()
  await weatherData()
}

getWeatherData()
