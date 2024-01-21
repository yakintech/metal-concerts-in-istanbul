import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import ConcertsScreen from './src/screens/ConcertsScreen'
import ProductsScreen from './src/screens/ProductsScreen'
import AddSupplierScreen from './src/screens/AddSupplierScreen'

const App = () => {

  return (
    <SafeAreaView>
      <AddSupplierScreen/>
    </SafeAreaView>
  )

}

export default App