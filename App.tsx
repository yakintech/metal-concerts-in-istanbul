import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import ConcertsScreen from './src/screens/concert/ConcertsScreen'
import ProductsScreen from './src/screens/ProductsScreen'
import AddSupplierScreen from './src/screens/AddSupplierScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import NotificationScreen from './src/screens/notification/NotificationScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ConcertStackScreen from './src/screens/concert'
import FavoritesStackScreen from './src/screens/favorites'
import NotificationStackScreen from './src/screens/notification'



const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Tab.Navigator
          screenOptions={
            {
              headerShown: false
            }
          }
        >
          <Tab.Screen
            name="ConcertsStack"
            component={ConcertStackScreen} 
            options={{
              tabBarLabel: 'Concerts',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="music" color={color} size={size} />
              )
            }}

            />

          <Tab.Screen
            name="FavoritesStack"
            component={FavoritesStackScreen} 
            
            options={{
              tabBarLabel: 'Favorites',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="star" color={color} size={size} />
              ),
            }}

            />

          <Tab.Screen
            name="NotificationStack"
            component={NotificationStackScreen} 
            
            options={{
              tabBarLabel: 'Notification',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="bell" color={color} size={size} />
              ),
            }}
            
            />

        </Tab.Navigator>
      </SafeAreaView>

    </NavigationContainer>

  )

}

export default App