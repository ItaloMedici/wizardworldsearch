import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { Character } from '../../model/Character';

import { Container, Detail, Info, Image, Name, Divider } from './styles';

import notFound from "../../assets/not-found.png";

const CharacterCard: React.FC<{ character: Character }> = ({ character }) => {
  let image = character.image ? { uri: character.image } : notFound

  return (
    <Container onPress={() => alert(character.name)}>
      <Image source={image} resizeMode="cover" />
      <Detail house={character.house} >
        <Name>{character.name}</Name>
        <Info>{character.house}</Info>
      </Detail>
    </Container>

  );
}

export default CharacterCard;