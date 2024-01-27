import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritesScreen from './FavoritesScreen';

const ConcertStack = createNativeStackNavigator();

const FavoritesStackScreen = () => {
    return (
        <>
            <ConcertStack.Navigator
                screenOptions={
                    {
                        headerShown: true
                    }
                }
            >
                <ConcertStack.Screen name="Favorites" component={FavoritesScreen} />
            </ConcertStack.Navigator>

        </>
    )
}

export default FavoritesStackScreen