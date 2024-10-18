import {SafeAreaView,ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './Components/FlatCards'
import  ElevatedCards from './Components/ElevatedCards'
import FencyCards from './Components/FencyCards'
import ActionCard from './Components/ActionCard'


const App = () => {
  return (
    <SafeAreaView>
        <ScrollView>
        <FlatCards/>
     < ElevatedCards/>
     <FencyCards/>
     <ActionCard />
     </ScrollView>
    </SafeAreaView>
  );
}

export default App