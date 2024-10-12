import React from 'react';
import {
  View,
  Text,
  SafeAreaView
} from 'react-native';
function App() {   // we have initialise the method so we have to write this into return method
  return (
    <SafeAreaView> 
      <View>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  );
}
export default App;
//view is like a div in html
//text is like a p in html
//SafeAreaView is used to make the app safe from the notch of the phone