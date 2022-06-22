import React, { useEffect, useState } from 'react';
import { ScrollView, ImageBackground } from 'react-native';
import Search from './components/Search';
import CurrentForecast from './components/CurrentForecast';
import DailyForecast from './components/DailyForecast';
import styled from 'styled-components/native';
import config from './config';
import bgImg from './assets/weather-bg.jpg';
import { IWeather } from './types';

// styles
const Container = styled.View`
  flex: 1;
  background-color: dodgerblue;
`;

const NoWeather = styled.Text`
  text-align: center;
  color: white;
`;

const FutureForecastContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  const [toggleSearch, setToggleSearch] = useState('city');
  const [city, setCity] = useState('Lviv');
  const [postalCode, setPostalCode] = useState('79007');
  const [lat, setLat] = useState(49.839);
  const [long, setLong] = useState(24.0191);
  const [weather, setWeather] = useState<IWeather | null>(null);

  const controller = new AbortController();
  const signal = controller.signal;

  //fetch lat long by city
  const fetchLatLongHandler = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${config.API_KEY}`
    )
      .then(
        (res) => res.json(),
        (err) => {
          // handle error here (can create error boundary or some ui component)
          console.log(err);
        }
      )
      .then((data) => {
        setLat(data.coord.lat);
        setLong(data.coord.lon);
      });
  };

  //fetch lat long by postal code/zip since OpenWeather Api only accepts zips
  const fetchByPostalHandler = () => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?key=${config.GOOGLE_KEY}&components=postal_code:${postalCode}`
    )
      .then(
        (res) => res.json(),
        (err) => {
          // handle error here (can create error boundary or some ui component)
          console.log(err);
        }
      )
      .then((data) => {
        setLat(data.results[0].geometry.location.lat);
        setLong(data.results[0].geometry.location.lng);
      });
  };

  // updates the weather when lat long changes
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely&units=metric&appid=${config.API_KEY}`,
      { signal }
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => {
        console.log('error', err);
      });
    return () => controller.abort();
  }, [lat, long]);

  if (!weather) {
    return <NoWeather>No Weather to show</NoWeather>;
  }

  return (
    <Container>
      <ImageBackground source={bgImg} style={{ width: '100%', height: '100%' }}>
        <Search
          city={city}
          setCity={setCity}
          fetchLatLongHandler={fetchLatLongHandler}
          toggleSearch={toggleSearch}
          setToggleSearch={setToggleSearch}
          fetchByPostalHandler={fetchByPostalHandler}
          setPostalCode={setPostalCode}
          postalCode={postalCode}
        />
        <CurrentForecast currentWeather={weather} />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
          <FutureForecastContainer>
            {weather.daily ? (
              weather.daily.map((day, index) => {
                if (index !== 0) {
                  return <DailyForecast key={day.dt} day={day} />;
                }
              })
            ) : (
              <NoWeather>No Weather to show</NoWeather>
            )}
          </FutureForecastContainer>
        </ScrollView>
      </ImageBackground>
    </Container>
  );
};

export default App;
