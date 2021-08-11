import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import color from '../styles/colors/colors';
import style from '../styles/components/ItemListStyle';

export default function ButtonOrder(props) {

  if (props.order == 'desc') {
    return (
      <View style={{ flexDirection: 'row-reverse', paddingHorizontal: 25 }}>
        <TouchableOpacity
          style={style.button}
          onPress={() => { props.onPress() }}>
          <MaterialIcons name="arrow-circle-down" size={40} color={color.green} />
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={{ flexDirection: 'row-reverse', paddingHorizontal: 25 }}>
        <TouchableOpacity
          style={style.button}
          onPress={() => { props.onPress() }}>
          <MaterialIcons name="arrow-circle-up" size={40} color={color.green} />
        </TouchableOpacity>
      </View >
    );
  }

}