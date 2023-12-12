import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Productos from '../data/Productos.json'
import Tarjeta from '../components/Tarjeta'
import { colores } from '../global/colores'

const ProductosPorCategoria = ({ categoria, onProductoSeleccionadoEvent }) => {
    const [productosPorCategoria, setProductosPorCategoria] = useState([])
  
    useEffect(() => {
      const productosFiltrados = Productos.filter(producto => producto.categoria === categoria)
      setProductosPorCategoria(productosFiltrados)}, [categoria])

    const mostrarProductos = ({ item }) => {
      return <Tarjeta producto={item} onProductoSeleccionadoEvent={onProductoSeleccionadoEvent} />;
    };
    

  return (
    <View style={styles.ProductosContainer}>
      <Text style={styles.ProductosTítulo}>Productos Por Categoria</Text>
      <FlatList 
      renderItem={mostrarProductos}
      keyExtractor={producto => producto.id}
      data={productosPorCategoria}/>
    </View> )}

export default ProductosPorCategoria

const styles = StyleSheet.create({
  ProductosContainer: {
    flex:1,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: colores.Lila
  }
})