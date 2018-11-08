
import { AsyncStorage } from 'react-native'
export const setLoginData = async (data) => {
  try {
    await AsyncStorage.setItem('registration', JSON.stringify(data));
  } catch (error) {
    console.log('err', error)
  }
}

export const clearItem = async () => {
  await AsyncStorage.removeItem('registration');
}

export const checkLogin = async () => {
  try {
    const value = await AsyncStorage.getItem('registration');
    return value;
    } catch (error) {
      console.log('err', error)
    }
}