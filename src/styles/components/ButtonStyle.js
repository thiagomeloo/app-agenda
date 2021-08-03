import { StyleSheet } from 'react-native'

import color from '../colors/colors'


const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: color.green,
    color: color.secondary,
    fontSize: 18,
    borderRadius: 20,
    margin: 5,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: color.secondary,
    fontSize: 22,
    fontWeight: 'bold',
  },
})

export default styles