import { useEffect, useState } from "react"
import { getFullForecast } from "./api"
import { ForecastItem } from "./forecastItem"

export const Forecast = () => {
    const [forecast, setForeacst] = useState(null)
    // call open weather api to get forecast for next n days
useEffect(() => {
    // check if this option is enabled in browser
      if(!window.navigator.geolocation) {
            alert("geolocation is not enabled")
            return
        }
        //get geolocation points
        navigator.geolocation.getCurrentPosition((position) => {
            // make call to get full forecast
            getFullForecast(position)
            .then(response => {
                // on success set response data into forecast state
                setForeacst(response)
            })
            .catch(error => console.log(error))
        },
         (error) => {
            console.log(error)
        })
}, [])

return (
        <ul className="forecast">
            {/* check if forecast state variable is not null */}
            {forecast && forecast.list.map(entry => (
                // iterate over the list array of data and render the ForecastItem component with given content
                // key prop is important and required on list rendering, it simplifies rerender on data change
                <ForecastItem key={entry.dt} forecastItem={entry}/>
            ))
            }
        </ul>
)
}