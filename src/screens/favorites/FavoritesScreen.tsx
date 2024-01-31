import { View, Text } from 'react-native'
import React from 'react'
import i18n from '../../i18n/i18n'
import { Button } from 'react-native-paper'

import { NativeModules, Platform } from 'react-native'


const FavoritesScreen = () => {

  //get device language from native module
  const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager.localeIdentifier;

  console.log('deviceLanguage', deviceLanguage)
  

  const changeTR = () => {
    i18n.changeLanguage('tr')
  }

  const changeEN = () => {
    i18n.changeLanguage('en')
  }

  return (
    <View>
      <Text>FavoritesScreen</Text>
      <Button onPress={changeTR}>Change Language - TR</Button>
      <Button onPress={changeEN}>Change Language - EN</Button>
      
    </View>
  )
}

export default FavoritesScreen