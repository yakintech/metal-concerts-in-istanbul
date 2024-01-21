import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import ConcertsScreen from './src/screens/ConcertsScreen'
import ProductsScreen from './src/screens/ProductsScreen'

const App = () => {

  return (
    <SafeAreaView>
      <ConcertsScreen/>
    </SafeAreaView>
  )

}

export default App