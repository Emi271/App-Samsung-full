import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Productos from '../data/Productos.json'
import Tarjeta from '../components/Tarjeta'

const ProductosPorCategoria = ({ categoria }) => {
    const [productosPorCategoria, setProductosPorCategoria] = useState([]);
  
    useEffect(() => {
      const productosFiltrados = Productos.filter(producto => producto.categoria === categoria)
      setProductosPorCategoria(productosFiltrados)
    }, [categoria]);
         const mostrarProductos = ({item}) => (<Tarjeta product={item}/>)

  return (
    <View>
      <Text>Productos Por Categoria</Text>
      <FlatList 
      renderItem={mostrarProductos}
      keyExtractor={item=> item.id}
      data={productosPorCategoria}/>
    </View> )}

export default ProductosPorCategoria

const styles = StyleSheet.create({})