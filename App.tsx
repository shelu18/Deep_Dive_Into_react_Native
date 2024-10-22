import {SafeAreaView,ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './Components/FlatCards'
import  ElevatedCards from './Components/ElevatedCards'
import FencyCards from './Components/FencyCards'
import ActionCard from './Components/ActionCard'
import ContactList from './Components/ContactList'


const App = () => {
  return (
    <SafeAreaView>
        <ScrollView>
        <FlatCards/>
     < ElevatedCards/>
     <FencyCards/>
     <ContactList/>
     <ActionCard />
     </ScrollView>
    </SafeAreaView>
  );
}

export default App