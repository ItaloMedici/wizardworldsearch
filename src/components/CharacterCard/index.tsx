import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { Character } from '../../model/Character';

import { Container, Detail, Info, Image, Name, Divider } from './styles';

const CharacterCard: React.FC<{ character: Character }> = ({ character }) => {
  return (
    <Container>
      <Image source={{ uri: character.image }} resizeMode="cover" />
      <Detail house={character.house} >
        <Name>{character.name}</Name>
        <Info>{character.house}</Info>
      </Detail>
    </Container>

  );
}

export default CharacterCard;