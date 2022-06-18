import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { Character } from '../../model/Character';

// import { Container } from './styles';

const CharacterScreen: React.FC = () => {
  const route = useRoute();
  const character = route.params as Character

  return (
    <View>
      <Text>{character.name}</Text>
    </View>
  )
}

export default CharacterScreen;