import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ConcertsScreen from './ConcertsScreen';
import ConcertDetailScreen from './ConcertDetailScreen';



const ConcertStack = createNativeStackNavigator();

const ConcertStackScreen = () => {
    return (<>
        <ConcertStack.Navigator
            screenOptions={
                {
                    headerShown: false
                }
            }
        >
            <ConcertStack.Screen name="Concerts" component={ConcertsScreen} />
            <ConcertStack.Screen name="ConcertDetail" component={ConcertDetailScreen} />
        </ConcertStack.Navigator>

    </>
    )
}

export default ConcertStackScreen