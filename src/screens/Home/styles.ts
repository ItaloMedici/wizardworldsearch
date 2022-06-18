import { FlatList } from "react-native";
import styled from "styled-components/native";

export const Header = styled.View`
  height: 200px;
  padding: 30px;

  background-color: ${({ theme }) => theme.colors.surface300};
  margin-bottom: 4px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color:  ${({ theme }) => theme.colors.gold};
  margin-bottom: 34px;
`;

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
`;