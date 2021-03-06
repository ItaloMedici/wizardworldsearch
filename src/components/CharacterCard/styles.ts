import styled from "styled-components/native";
import { HouseEnum } from "../../model/House";
import { findHogwartsHouseColor } from "../../Theme/ToolTheme";

export const Container = styled.TouchableOpacity`
  width: 45%;
  height: 250px;
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;

`;

export const Image = styled.ImageBackground`
  flex: 1.5;
  margin-bottom: -50px;
`;

export const Detail = styled.View<{house: string | undefined}>`
  padding: 8px 10px;
  background-color: ${({ house }) => findHogwartsHouseColor(house)};
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
  margin-bottom: 3px;
  text-align: center;
`;

export const Info = styled.Text`
  font-size: 10px;
  opacity: .6;
  color: white;
  margin-bottom: 5px;
  text-align: center;
`;

export const Divider = styled.View`
  border: .3px solid black; 
  opacity: .2;
  margin: 5px 0 8px;
`;