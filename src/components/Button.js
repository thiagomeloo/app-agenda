import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import style from '../styles/components/ButtonStyle';

export default function Button(props) {
  return (
    <TouchableOpacity
      style={style.container}
      onPress={props.onPress != null ? props.onPress : () => { }}>
      <Text style={style.text}>
        {props.text != null ? props.text : 'Salvar'}
      </Text>

    </TouchableOpacity>
  );
}
