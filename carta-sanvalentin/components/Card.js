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
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center', // Centra los elementos horizontalmente
    justifyContent: 'center', // Centra los elementos verticalmente
    width: '80%', // Controla el ancho del texto para que no se expanda demasiado
  },
  message: {
    fontSize: 24,
    color: '#a2d2ff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10, // Espacio entre el mensaje y el emoji
  },
  emoji: {
    fontSize: 40,
  },
});

export default Card;
