import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, Button, TouchableOpacity, Switch } from "react-native";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("#1b013b");
  const [profileName, setProfileName] = useState("Agente K");
  const [profileDescription, setProfileDescription] = useState("Mi nombre es K, pero mi número es 3-5-8, un código que me recuerda constantemente que no soy humano...");
  const [showDescription, setShowDescription] = useState(true);
  const [profileImage, setProfileImage] = useState(require("./assets/K.jpg"));
  const [backgroundImage, setBackgroundImage] = useState(require("./assets/Background.jpg"));

  const toggleBackground = () => {
    setBackgroundColor(backgroundColor === "#1b013b" ? "#d63dc5" : "#1b013b");
  };

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const changeProfileImage = () => {
    setProfileImage(
      profileImage === require("./assets/K.jpg")
        ? require("./assets/K_alternate.jpg")
        : require("./assets/K.jpg")
    );
  };

  const changeBackgroundImage = () => {
    setBackgroundImage(
      backgroundImage === require("./assets/Background.jpg")
        ? require("./assets/Background_alternate.jpg")
        : require("./assets/Background.jpg")
    );
  };

  return (
    <View style={[styles.container, { backgroundColor }]}> 
      <Text style={styles.headerTitle}>Wallace Corporation (Red social)</Text>

      <View style={styles.backgroundContainer}>
        <Image source={backgroundImage} style={styles.backgroundImage} />
      </View>

      <TouchableOpacity onPress={changeProfileImage}>
        <Image source={profileImage} style={styles.profileImage} />
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        value={profileName}
        onChangeText={setProfileName}
        placeholder="Ingrese nombre"
        placeholderTextColor="#bbb"
      />

      <Text style={styles.title}>{profileName}</Text>

      <Switch
        value={showDescription}
        onValueChange={toggleDescription}
      />

      <TextInput
        style={styles.input}
        value={profileDescription}
        onChangeText={setProfileDescription}
        placeholder="Ingrese descripción"
        placeholderTextColor="#bbb"
      />

      {showDescription && (
        <Text style={styles.description}>{profileDescription}</Text>
      )}

      <Button title="Cambiar Fondo" onPress={toggleBackground} color="#3d52e3" />
      <Button title="Cambiar Imagen de Fondo" onPress={changeBackgroundImage} color="#3d52e3" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#983cf9",
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
    marginTop: 15,
  },
  backgroundContainer: {
    width: "100%",
    height: 250,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#ccc",
    marginTop: 60,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "cover",
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 4,
    borderColor: "#3d52e3",
    marginTop: -100,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#983cf9",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: "#fff",
    marginVertical: 10,
    textAlign: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#e100ff",
    marginTop: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    color: "#ff79c6",
    lineHeight: 22,
    marginTop: 5,
    paddingHorizontal: 20,
  },
});
