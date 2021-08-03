import AsyncStorage from '@react-native-async-storage/async-storage';

const dataAsync = {

  save(key, data) {
    async function saveData() {
      AsyncStorage.setItem(key, JSON.stringify(data));
    }
    saveData();
  },

  get(key) {
    async function getData() {
      const dataReturn = await AsyncStorage.getItem(key)
      if (dataReturn) {
        return JSON.parse(dataReturn);
      } else {
        return [];
      }
    }
    return getData();

  },

}


export default dataAsync;
