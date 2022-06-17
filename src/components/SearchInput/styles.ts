import styled from "styled-components/native";

export const Container = styled.TextInput`
  width: 100%;
  height: 45px;
  padding: 5px 15px;

  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.surface800};

  background-color: ${({ theme }) => theme.colors.background};

  color: white;
`;