import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'

import color from '../styles/colors/colors';
import style from '../styles/components/ItemListStyle';

export default function ItemList(props) {
  return (
    <View style={style.container}>

      <Text style={style.name}>
        {props.name}
      </Text>
      <View style={style.row}>
        <MaterialIcons name="mail" size={20} color={color.primary} />
        <Text style={style.email}>
          {props.email}
        </Text>
      </View>
      <View style={style.row}>
        <MaterialIcons name="phone" size={20} color={color.primary} />
        <Text style={style.phone}>
          {props.phone}
        </Text>
      </View>
      <View style={style.rodape}>
        <View style={style.row}>
          <MaterialIcons name="event" size={20} color={color.primary} />
          <Text style={style.date}>
            {props.date}
          </Text>
        </View>

        <TouchableOpacity
          style={style.button}
          onPress={() => { props.update() }}>
          <MaterialIcons name="edit" size={30} color={color.green} />
        </TouchableOpacity>

        <TouchableOpacity
          style={style.button}
          onPress={() => { props.remove() }}>
          <MaterialIcons name="delete" size={30} color={color.red} />
        </TouchableOpacity>
      </View>

    </View>
  );
}