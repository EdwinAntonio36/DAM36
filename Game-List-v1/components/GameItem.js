import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/styles';

const GameItem = ({ game }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: game.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{game.name}</Text>
        <Text style={styles.description}>{game.description}</Text>
      </View>
    </View>
  );
};

export default GameItem;


