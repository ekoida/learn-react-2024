const HOST = "https://api.openweathermap.org/data/2.5";
const FORECAST = `${HOST}/forecast`;
const CURRENT = `${HOST}/weather`;

export const ICON_HOST = "https://openweathermap.org/img/wn/";

export const getForecast = async (position) => {
  const {
    coords: { latitude, longitude },
  } = position;

  const params = new URLSearchParams({
    lat: latitude,
    lon: longitude,
    units: "metric",
    appid: "13f21668a6b69571d63bc59c79d69966",
  });
  try {
    const response = await fetch(`${CURRENT}?${params}`);
    if (!response.ok) {
      return Promise.reject(response);
    }
    return response.json();
  } catch (error) {
    console.log("in catch  block");
    console.log(error);
  }
};

export const getFullForecast = async (position) => {
  const {
    coords: { latitude, longitude },
  } = position;

  const params = new URLSearchParams({
    lat: latitude,
    lon: longitude,
    units: "metric",
    appid: "13f21668a6b69571d63bc59c79d69966",
  });

  try {
    const response = await fetch(`${FORECAST}?${params}`);
    if (!response.ok) {
      return Promise.reject(response);
    }
    return response.json();
  } catch (error) {
    console.log("in foreacst error catch block");
    console.log(error);
  }
};
