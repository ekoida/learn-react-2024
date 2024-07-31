const MAKE_CALL = true;
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
  if (MAKE_CALL) {
    const promise = new Promise((resolve, reject) => {
      resolve({
        coord: {
          lon: 28.7834,
          lat: 47.0319,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        base: "stations",
        main: {
          temp: 23.82,
          feels_like: 23.46,
          temp_min: 23.82,
          temp_max: 23.82,
          pressure: 1015,
          humidity: 46,
          sea_level: 1015,
          grnd_level: 998,
        },
        visibility: 10000,
        wind: {
          speed: 4.63,
          deg: 320,
        },
        clouds: {
          all: 0,
        },
        dt: 1722412753,
        sys: {
          type: 1,
          id: 7022,
          country: "MD",
          sunrise: 1722393786,
          sunset: 1722447554,
        },
        timezone: 10800,
        id: 618069,
        name: "Chișinău Municipality",
        cod: 200,
      });
    });

    return promise.then((result) => result);
  } else {
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
