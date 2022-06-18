import React from 'react';
import { Character } from '../../model/Character';

import { Container, Detail, Image, Info, Name } from './styles';

import notFound from "../../assets/not-found.png";

type CharacterCardProps = {
  character: Character,
  onPress: (character: Character) => void
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, onPress }) => {
  let image = character.image ? { uri: character.image } : notFound

  return (
    <Container onPress={() => onPress(character)}>
      <Image source={image} resizeMode="cover" />
      <Detail house={character.house} >
        <Name>{character.name}</Name>
        <Info>{character.house}</Info>
      </Detail>
    </Container>
  );
}

export default CharacterCard;