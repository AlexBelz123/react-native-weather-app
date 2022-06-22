import styled from 'styled-components/native';

export const CurrentView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const CurrentTempView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const MainInfoContainer = styled.View`
  display: flex;
  align-items: center;
`;

export const Description = styled.Text`
  color: white;
  font-size: 15px;
  text-transform: capitalize;
`;

export const SecondaryInfoContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 10px;
  width: 95%;
  max-width: 478px;
`;

export const WeatherIcon = styled.Image`
  width: 50px;
  height: 50px;
`;

export const Timezone = styled.Text`
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: 15px;
`;

export const CurrentDegrees = styled.Text`
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: 60px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  color: black;
  padding: 10px 30px;
`;

export const DetailsBox = styled.View`
  display: flex;
`;

export const Label = styled.Text`
  font-size: 18px;
`;

export const Details = styled.Text`
  color: black;
  font-size: 15px;
  text-transform: capitalize;
`;
