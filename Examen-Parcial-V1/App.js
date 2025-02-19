import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [producto, setProducto] = useState("");
  const [listaCompras, setListaCompras] = useState([]);

  const agregarProducto = () => {
    if (producto.trim()) {
      setListaCompras([...listaCompras, { id: Date.now().toString(), nombre: producto, comprado: false }]);
      setProducto("");
    }
  };

  const alternarComprado = (id) => {
    setListaCompras(
      listaCompras.map(item =>
        item.id === id ? { ...item, comprado: !item.comprado } : item
      )
    );
  };

  const eliminarProducto = (id) => {
    setListaCompras(listaCompras.filter(item => item.id !== id));
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Lista de Compras</Text>
      <TextInput
        style={styles.entrada}
        placeholder="Ingrese un producto"
        value={producto}
        onChangeText={setProducto}
      />
      <Button title="Agregar" onPress={agregarProducto} />
      <FlatList
        data={listaCompras}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={[styles.textoItem, item.comprado && styles.comprado]}>{item.nombre}</Text>
            <TouchableOpacity onPress={() => alternarComprado(item.id)} style={styles.boton}>
              <Text style={styles.botonEstado}>{item.comprado ? "No comprado" : "Comprado"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => eliminarProducto(item.id)} style={styles.botonEliminar}>
              <Text style={styles.botonEstado}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  entrada: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  textoItem: {
    fontSize: 18,
  },
  comprado: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  boton: {
    backgroundColor: "#28a745",
    padding: 8,
    borderRadius: 5,
    marginRight: 5,
  },
  botonEliminar: {
    backgroundColor: "#dc3545",
    padding: 8,
    borderRadius: 5,
  },
  botonEstado: {
    color: "white",
    fontWeight: "bold",
  },
});