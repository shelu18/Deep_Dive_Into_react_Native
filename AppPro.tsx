import React from 'react';
import  {
     Text,
     View,
    StyleSheet,
    useColorScheme,
    SafeAreaView,
    } from 'react-native';




function AppPro(): JSX.Element{   //here we can write the jsx elements it returns only jsx elements and we ca't define other elements then jsx it will help in writing valid code 
const isDarkMode =useColorScheme() === 'dark';
    return(
        <View style={styles.container}>
            <Text style={isDarkMode? styles.whiteText:whiteText}>Hello jiii welcome to React Native</Text>
        </View>

    );
}
//we have a method and we can define the object under it and we can use it in the return method  we can define the multiple style object under the create method 
const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },
    textStyle:{
        fontSize:20,
        color:'black',
    },
    darkText:{
        fontSize:20,
        color:'white',
    },
    whiteText:{ 
        fontSize:20,
        color:'black',
    },
})
export default AppPro;
//here explore some more components 
