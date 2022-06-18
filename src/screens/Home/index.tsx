import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import CharacterCard from '../../components/CharacterCard';
import SearchInput from '../../components/SearchInput';
import { Character } from '../../model/Character';
import { getCharacters } from '../../service/CharacterService';

import { Container, Header, Title } from './styles';

const Home: React.FC = () => {
  const [allcharacters, setAllCharacters] = useState<Character[]>([]);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchName, setSearchName] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    getCharacters()
      .then(res => {
        setAllCharacters(res.data)
        setCharacters(res.data)
      })
      .catch(err => {
        alert(err.message)
      });
  }, []);

  const handleSearch = (value: string) => {
    setSearchName(value)

    setCharacters(
      allcharacters.filter(c => c.name.toLowerCase().includes(value.toLowerCase()))
    )
  }

  const openCharacterSreen = (character: Character) => {
    navigation.navigate('Character', character);
  }

  return (
    <Container>
      <Header>
        <Title>Harry Potter's Characters!</Title>
        <SearchInput
          placeholder="Insert name..."
          value={searchName}
          onChangeText={handleSearch}
        />
      </Header>
      <FlatList
        numColumns={3}
        data={characters.slice(0, 52)}
        keyExtractor={(character, i) => character.name + i}
        renderItem={({ item }) => <CharacterCard character={item} onPress={openCharacterSreen}/>}
      />
    </Container>
  );
}

export default Home;