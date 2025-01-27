import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Título en la parte superior izquierda */}
      <Text style={styles.headerTitle}>Wallace Corporation (Red social)</Text>

      {/* Contenedor del fondo */}
      <View style={styles.backgroundContainer}>
        <Image
          source={require('./assets/Background.jpg')} 
          style={styles.backgroundImage} 
        />
      </View>
     
      {/* Imagen de perfil */}
      <Image
        source={require('./assets/K.jpg')} 
        style={styles.profileImage}
      />

      {/* Título del perfil */}
      <Text style={styles.title}>Agente K</Text>

      {/* Descripción del Usuario */}
      <Text style={styles.description}>
        Mi nombre es K, pero mi número es 3-5-8, un código que me recuerda constantemente 
        que no soy humano, que mi existencia tiene un propósito definido y que todo lo que soy tiene fecha de caducidad. Trabajo como blade runner, cazando a los replicantes fuera de control. No tengo familia, ni historia, ni recuerdos que me conecten con algo más allá de mi trabajo.
        Pero hay algo en mi interior que sigue buscando algo más, una chispa de humanidad, 
        un anhelo de comprender mi existencia más allá de las órdenes que recibo. 
        Ese viaje me lleva a cuestionar lo que realmente significa ser humano... y lo que soy realmente yo.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#1b013b", 
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
