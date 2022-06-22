import React from 'react';
import {
  CurrentView,
  Timezone,
  MainInfoContainer,
  CurrentTempView,
  Description,
  SecondaryInfoContainer,
  WeatherIcon,
  CurrentDegrees,
  Row,
  DetailsBox,
  Label,
  Details,
} from './style';

const CurrentForecast = ({ currentWeather }) => {
  return (
    <CurrentView>
      <Timezone>{currentWeather.timezone}</Timezone>
      <MainInfoContainer>
        <CurrentTempView>
          {currentWeather.current && (
            <WeatherIcon
              source={{
                uri: `http://openweathermap.org/img/wn/${currentWeather.current.weather[0].icon}@2x.png`,
              }}
              resizeMode={'contain'}
            />
          )}
          <CurrentDegrees>
            {Math.round(currentWeather.current && currentWeather.current.temp)}
            °C
          </CurrentDegrees>
        </CurrentTempView>
        <Description>
          {currentWeather.current &&
            currentWeather.current.weather[0].description}
        </Description>
      </MainInfoContainer>
      <SecondaryInfoContainer>
        <Row>
          <DetailsBox>
            <Label>Feels</Label>
            <Details>
              {currentWeather.current &&
                Math.round(currentWeather.current.feels_like)}
              °C
            </Details>
          </DetailsBox>
          <DetailsBox>
            <Label>Low</Label>
            <Details>
              {currentWeather.daily &&
                Math.round(currentWeather.daily[0].temp.min)}
              °C
            </Details>
          </DetailsBox>
          <DetailsBox>
            <Label>High</Label>
            <Details>
              {currentWeather.daily &&
                Math.round(currentWeather.daily[0].temp.max)}
              °C
            </Details>
          </DetailsBox>
        </Row>
        <Row>
          <DetailsBox>
            <Label>Wind</Label>
            <Details>
              {currentWeather.current && currentWeather.current.wind_speed} m/s
            </Details>
          </DetailsBox>
          <DetailsBox>
            <Label>Humidity</Label>
            <Details>
              {currentWeather.current && currentWeather.current.humidity}%
            </Details>
          </DetailsBox>
          <DetailsBox>
            <Label>Rain</Label>
            <Details>
              {currentWeather.daily > 0 ? currentWeather.daily[0].rain : '0'} MM
            </Details>
          </DetailsBox>
        </Row>
      </SecondaryInfoContainer>
    </CurrentView>
  );
};

export default CurrentForecast;
