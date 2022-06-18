import styled from "styled-components/native";

export const Container = styled.TextInput`
  width: 100%;
  height: 45px;
  padding: 5px 15px;

  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.surface300};

  background-color: ${({ theme }) => theme.colors.surface100};

  color:  ${({ theme }) => theme.colors.textColor};

  box-shadow:  10px 10px 23px #d0d0d0;

  &:focus, &:active {
    outline: 1px solid red;
  }
`;