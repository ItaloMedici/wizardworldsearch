import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { Character } from '../../model/Character';
import { AntDesign } from '@expo/vector-icons';

import notFound from "../../assets/not-found.png";

import { Card, Container, Info, LeftSide, Portrait, RightSide, Title } from './styles';
import { findHogwartsHouseColor } from '../../Theme/ToolTheme';

const CharacterScreen: React.FC = () => {
  const route = useRoute();
  const { character } = route.params as { character: Character }

  let image = character.image ? { uri: character.image } : notFound

  return (
    <Container house={character.house} >
      <LeftSide>
        <Portrait source={image} resizeMode="cover" />
      </LeftSide>
      <RightSide>
        <Card>
          <Info>
            <AntDesign name="Trophy" size={18} color="black" />
            <Title>House:</Title>
            <Text>{character.house}</Text>
          </Info>

          <Info>
            <AntDesign name="Trophy" size={18} color="black" />
            <Title>House:</Title>
            <Text>{character.house}</Text>
          </Info>

          <Info>
            <AntDesign name="Trophy" size={18} color="black" />
            <Title>House:</Title>
            <Text>{character.house}</Text>
          </Info>

          <Info>
            <AntDesign name="Trophy" size={18} color="black" />
            <Title>House:</Title>
            <Text>{character.house}</Text>
          </Info>

          <Info>
            <AntDesign name="Trophy" size={18} color="black" />
            <Title>House:</Title>
            <Text>{character.house}</Text>
          </Info>
        </Card>
      </RightSide>
    </Container>
  )
}

export default CharacterScreen;