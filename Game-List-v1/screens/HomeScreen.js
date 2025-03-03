import React from 'react';
import { View, FlatList, Text } from 'react-native';
import games from '../data/games';
import GameItem from '../components/GameItem';
import styles from '../styles/styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Catálogo de Videojuegos</Text>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameItem game={item} />}
      />
    </View>
  );
};

export default HomeScreen;


