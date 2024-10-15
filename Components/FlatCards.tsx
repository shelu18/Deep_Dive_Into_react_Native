import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <>
    <View>
          <Text style={styles.headingText}>Flat Cards</Text>
      </View>
      <View style={styles.container}>
              <View style={[styles.card,styles.card1]}>
                  <Text>flatecards</Text>
              </View>
              <View style={[styles.card,styles.card2]}>
                  <Text>flatecards</Text>
              </View>
              <View style={[styles.card,styles.card3]}>
                  <Text>flatecards</Text>
              </View>
          </View></>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 30,
  },
  container: {  // Changed 'Container' to 'container'
    flexDirection: 'row',
    justifyContent: 'space-around',//to change the default behavior of the flexbox container
    marginTop: 20,
  },
  card: {
    height: 100,
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',  //how can make this cards scorabble in the center
    alignItems: 'center',
  },
  card1: {
    backgroundColor: 'red',
  },
  card2: {
    backgroundColor: 'green',
  },
  card3: {
    backgroundColor: 'blue',
  },
});
