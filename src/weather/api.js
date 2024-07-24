const token = 'get token from the .env file'

export const getLatestForecast = () => {
    if(!window.navigator.geolocation) {
        alert("geolocation is not enabled")
        return
    }

    const success = async (position) => {
        const {lattitude: lat, longitude: lon} = position

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={API key}`)
        if(!response.ok) {
            return Promise.reject(response)
        }
        const data = await response.json()
        console.log(data)
        } catch (error) {
            console.log('in catch  block')
            console.log(error)
        }
        
    }

    const error = (error) => {
        console.log('in error callback')
        console.log(error)
    }
    
    navigator.geolocation.getCurrentPosition(success, error)
}