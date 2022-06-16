import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import CharacterCard from '../../components/CharacterCard';
import { Character } from '../../model/Character';
import { getCharacters } from '../../service/CharacterService';

// import { Container } from './styles';

const Home = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    getCharacters()
      .then(res => {
        setCharacters(res.data)
      })
      .catch(err => {
        alert(err.message)
      });
  }, [])

  return (
    <View>
      <FlatList
        data={characters}
        keyExtractor={(character, i) => character.name+i}
        renderItem={({ item }) => <CharacterCard character={item} />}
      />
    </View>
  );
}

export default Home;