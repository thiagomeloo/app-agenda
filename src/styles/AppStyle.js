import { StyleSheet } from 'react-native'

import color from './colors/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: color.backgroundView,
  },
  header: {
    margin: 25,
  },
  col: {
    flexDirection: 'column',
  },
  title: {
    margin: 5,
    fontSize: 28,
    textAlign: 'center',
    color: color.primary,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  inputText: {
    height: 40,
    backgroundColor: color.inputColor,
    color: color.secondary,
    fontSize: 18,
    borderRadius: 20,
    margin: 5,
    textAlign: 'center',
  },
})

export default styles