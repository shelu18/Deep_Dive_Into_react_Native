import { View, Text,SafeAreaView,ScrollView } from 'react-native'
import React from 'react'
import flatCards from './Components/FlatCards'
import FlatCards from './Components/FlatCards'

const App = () => {
  return (
    <SafeAreaView>
        <ScrollView>
        <FlatCards/>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App