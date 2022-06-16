import React from 'react';
import { Text, View } from 'react-native';
import { Character } from '../../model/Character';

import { Container } from './styles';

const CharacterCard: React.FC<{ character: Character }> = ({ character }) => {
  return (
    <View>
      <Text>{character.name}</Text>
    </View>
  );
}

export default CharacterCard;