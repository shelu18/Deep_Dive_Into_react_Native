import { View, Text,SafeAreaView,ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './Components/FlatCards'
import  ElevatedCards from './Components/ElevatedCards'

const App = () => {
  return (
    <SafeAreaView>
        <ScrollView>
        <FlatCards/>
      </ScrollView>
     < ElevatedCards/>
    </SafeAreaView>
  );
}

export default App