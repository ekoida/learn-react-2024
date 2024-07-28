const HOST = 'https://api.openweathermap.org/data/2.5/weather'

export const getForecast = async (position) => {
    console.log(position)
    const {coords: {latitude, longitude}} = position

    const params = new URLSearchParams({
        lat: latitude,
        lon: longitude,
        units: 'metric',
        appid: '13f21668a6b69571d63bc59c79d69966'
    })
    try {
        const response = await fetch(`${HOST}?${params}`)
    if(!response.ok) {
        return Promise.reject(response)
    }
   return response.json()
   
    } catch (error) {
        console.log('in catch  block')
        console.log(error)
    } 
}