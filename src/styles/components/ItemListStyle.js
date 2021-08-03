import { StyleSheet } from 'react-native'

import colors from '../colors/colors'


const styles = StyleSheet.create({
  container: {
    margin: 4,
    marginHorizontal: 25,
    padding: 10,
    flex: 1,
    backgroundColor: colors.backgroundItemList,
    borderRadius: 15
  },
  row: {
    flexDirection: 'row',
    padding: 5,
  },
  name: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
    color: colors.foreground,
  },
  email: {
    textAlign: 'left',
    fontSize: 18,
    marginLeft: 5,
    color: colors.foreground,
  },
  phone: {
    textAlign: 'left',
    fontSize: 18,
    marginLeft: 5,
    color: colors.foreground,
  },
  date: {
    fontSize: 15,
    marginLeft: 5,
    color: colors.foreground,
  },
  button: {
    marginHorizontal: 5,
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
})

export default styles