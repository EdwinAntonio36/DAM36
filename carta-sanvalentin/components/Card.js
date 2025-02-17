import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const Card = ({ message, background, emoji }) => {
  return (
    <ImageBackground source={background} style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.emoji}>{emoji}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 500,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '80%', 
  },
  message: {
    fontSize: 24,
    color: '#a2d2ff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10, 
  },
  emoji: {
    fontSize: 40,
  },
});

export default Card;
