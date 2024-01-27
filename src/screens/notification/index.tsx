import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotificationScreen from './NotificationScreen';

const NotificationStack = createNativeStackNavigator();


const NotificationStackScreen = () => {

  return (<>
    <NotificationStack.Navigator
      screenOptions={
        {
          headerShown: true
        }
      }
    >
      <NotificationStack.Screen name="Notification" component={NotificationScreen} />
    </NotificationStack.Navigator>
  
  </>
  )
}

export default NotificationStackScreen