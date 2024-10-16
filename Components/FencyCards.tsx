import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FencyCards() {
  return (
      <View>
        <Text style={styles.headingStyle}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image source={{uri:'https://media.istockphoto.com/id/1905000478/photo/concept-of-online-education-man-use-online-education-training-and-e-learning-webinar-on.jpg?s=2048x2048&w=is&k=20&c=LeqhXSJ27Nie3aEzLoluKztfXbnTqhdJQ_Ns2L2mmHY='}}
         style={styles.ImageStyle} />
         <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Mandav</Text>
            <Text style ={styles.cardLabel}>heart of MP</Text>
            <Text style={styles.cardDescription}>Mandav is historical place under mountains </Text>
             <Text style={styles.Footer}>120 mins away</Text>
         </View>
      </View>
      </View>
  )
}

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingTop: 20
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    backgroundColor: 'orange',
    elevation: 4,
    shadowColor: '#333',
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 1,
      height: 1
    },
    margin: 8
  },
  cardElevated: {
    // Add any additional styles for elevated cards here
  },
  ImageStyle: {
    width: 100,
    height: 100,
    borderRadius: 4
  },
    cardBody: {
        padding: 8
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    cardLabel: {
        fontSize: 14,
        color: '#333'
    },
    cardDescription: {
        fontSize: 12,
        color: '#333'
    },
    Footer: {
        fontSize: 10,
        color: '#333'
    }

})