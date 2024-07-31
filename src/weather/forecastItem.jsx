import { ICON_HOST } from "./api"
export const ForecastItem = ({forecastItem}) => {
    return (
        <li className="forecast-item">
            <p>Date: <span>{forecastItem.dt_txt}</span></p>
                    <p>
                        Teperature:
                         <span>{forecastItem.main.temp}</span>
                         {/* to render icons we have to call cpecial api endpoint on open weather provider and apply the url */}
                         {/* if we want different size of the icon we can change the ratio after @ sign */}
                        <img
                            src={`${ICON_HOST}/${forecastItem.weather[0].icon}@2x.png`}
                            alt={forecastItem.weather[0].description}
                            title={forecastItem.weather[0].description}
                        />
                    </p>
        </li>
    )
}