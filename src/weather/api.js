export const getForecast = async (position) => {
    console.log(position)
    const {coords: {latitude, longitude}} = position

    try {
        const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=13f21668a6b69571d63bc59c79d69966&units=metric`)
    if(!response.ok) {
        return Promise.reject(response)
    }
   return response.json()
   
    } catch (error) {
        console.log('in catch  block')
        console.log(error)
    } 
}