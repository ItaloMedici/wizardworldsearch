import React from 'react';
import { TextInputProps } from 'react-native';
import Theme from '../../Theme';

import { Container } from './styles';

const SearchInput: React.FC<TextInputProps> = ({ ...rest }) => {
  return (
    <Container
      placeholderTextColor={Theme.colors.surface600}
      {...rest}
    />
  );
}

export default SearchInput;