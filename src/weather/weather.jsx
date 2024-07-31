import { useEffect, useState } from "react";
import { getForecast, ICON_HOST } from "./api";
import { ReactComponent as IconRight } from "../icons/arrow-right-circle.svg";
import { Forecast } from "./forecast";
import "./styles.scss";

export const Weather = () => {
  const [data, setData] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (!window.navigator.geolocation) {
      alert("geolocation is not enabled");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        getForecast(position)
          .then((response) => {
            setData(response);
          })
          .catch((error) => console.log(error));
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  // this method works as simmple true/false switcher
  // if showMore state is false it will converti it to true and vice versa
  const toggleForecast = () => {
    setShowMore((state) => {
      if (state === true) {
        state = false;
      } else {
        state = true;
      }
    });
  };

  return (
    <div className="weather">
      <p>
        {data?.name}
        {/* show icon using the api for icons from openweather */}
        <img
          src={`${ICON_HOST}${data?.weather[0].icon}.png`}
          title={data?.weather[0].description}
          alt={data?.weather[0].description}
        />
      </p>
      <p>temperature: {data?.main.temp}</p>
      <p>clouds: {data?.clouds.all}</p>
      <button className="button-more" onClick={toggleForecast}>
        See Forecast <IconRight className="icon" />
      </button>
      {/* render Forecast component if the showMore is true */}
      {showMore && <Forecast />}
    </div>
  );
};
