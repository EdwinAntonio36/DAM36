import React, { useRef, useState, useEffect } from 'react';
import { 
  View, Text, TextInput, Button, Image, ImageBackground, 
  StyleSheet, TouchableOpacity, ScrollView 
} from 'react-native';
import ViewShot from 'react-native-view-shot';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import Card from '../components/Card';

const HomeScreen = () => {
  const [message, setMessage] = useState('');
  const [background, setBackground] = useState(require('../assets/background.jpg'));
  const [emoji, setEmoji] = useState('');
  const [capturedImages, setCapturedImages] = useState([]);
  const viewShotRef = useRef(null);

  const backgrounds = [
    require('../assets/background.jpg'),
    require('../assets/chayanne.jpg'),
  ];

  const emojis = ['❤️', '😍', '💌', '🌹'];

  useEffect(() => {
    loadCapturedImages();
  }, []);

  // Cargar imágenes guardadas previamente
  const loadCapturedImages = async () => {
    const directory = FileSystem.documentDirectory;
    const files = await FileSystem.readDirectoryAsync(directory);
    const images = files.filter(file => file.endsWith('.png')).map(file => directory + file);
    setCapturedImages(images);
  };

  // Captura la imagen y la guarda en el almacenamiento
  const captureImage = async () => {
    if (viewShotRef.current) {
      try {
        const uri = await viewShotRef.current.capture();
        const fileName = `captura_${Date.now()}.png`;
        const newPath = FileSystem.documentDirectory + fileName;

        await FileSystem.moveAsync({
          from: uri,
          to: newPath,
        });

        setCapturedImages([...capturedImages, newPath]);
        console.log('Imagen guardada en:', newPath);
      } catch (error) {
        console.error('Error al capturar la imagen:', error);
      }
    }
  };

  // Compartir imagen seleccionada
  const shareImage = async (uri) => {
    if (!uri) return;
    const isAvailable = await Sharing.isAvailableAsync();
    if (!isAvailable) {
      alert('No se puede compartir en este dispositivo');
      return;
    }
    try {
      await Sharing.shareAsync(uri);
    } catch (error) {
      console.error('Error al compartir la imagen:', error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Tarjeta con ViewShot */}
        <ViewShot ref={viewShotRef} options={{ format: 'png', quality: 0.9 }}>
          <Card message={message} background={background} emoji={emoji} />
        </ViewShot>

        <TextInput
          style={styles.input}
          placeholder="Escribe tu mensaje"
          value={message}
          onChangeText={setMessage}
        />

        {/* Selección de fondos */}
        <View style={styles.backgroundSelector}>
          {backgrounds.map((bg, index) => (
            <TouchableOpacity key={index} onPress={() => setBackground(bg)}>
              <ImageBackground source={bg} style={styles.backgroundOption} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Selección de emojis */}
        <View style={styles.emojiSelector}>
          {emojis.map((em, index) => (
            <TouchableOpacity key={index} onPress={() => setEmoji(em)}>
              <Text style={styles.emoji}>{em}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Botón para borrar emoji */}
        <TouchableOpacity onPress={() => setEmoji('')} style={styles.trashButton}>
          <Text style={styles.emoji}>🗑️</Text>
        </TouchableOpacity>

        {/* Botones de captura y compartir */}
        <Button title="Capturar Tarjeta" onPress={captureImage} />

        {/* Mostrar capturas guardadas */}
        <Text style={styles.sectionTitle}>Capturas Guardadas:</Text>
        <ScrollView horizontal style={styles.capturesContainer}>
          {capturedImages.map((uri, index) => (
            <TouchableOpacity key={index} onPress={() => shareImage(uri)}>
              <Image source={{ uri }} style={styles.capturedImage} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffafcc',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  backgroundSelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  backgroundOption: {
    width: 100,
    height: 100,
  },
  emojiSelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  emoji: {
    fontSize: 30,
  },
  trashButton: {
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  capturesContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  capturedImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
  },
});

export default HomeScreen;
