import styled from "styled-components/native";
import { HouseType } from "../../model/House";
import { findHogwartsHouseColor } from "../../Theme/ToolTheme";

export const Container = styled.View<{house: HouseType | undefined}>`
  flex: 1;
  //background-color: ${({ house }) => findHogwartsHouseColor(house, true)};
  background-color: ${({ theme }) => theme.colors.background};

  display: flex;
  flex-direction: row;
`;

export const LeftSide = styled.View`
  flex: .7;
  padding: 16px;
  padding-right: 8px;
`;

export const RightSide = styled.View`
  flex: 1;
  padding: 16px;
  padding-left: 8px;
`;

export const Portrait = styled.ImageBackground`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Card = styled.View`
  background-color: ${({ theme }) => theme.colors.surface100};
  border-radius: 10px;
  width: 100%;
  height: fit-content;
  padding: 16px;
`;

export const Info = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  align-items: center;

  margin: 8px 0 8px;
`

export const Title = styled.Text`
  font-weight: bold;
  margin: 0 5px;
  font-size: 14px;
`;