import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Tarjeta = ({
  producto, onProductoSeleccionadoEvent
}) => {
  return (
    <TouchableOpacity onPress={()=> onProductoSeleccionadoEvent(producto.id)} style={styles.TarjetaContainer}>
      <Image style={styles.TarjetaImagen} source={{url:producto.ImgMiniatura}}/>
      <Text style={styles.TarjetaTitulo}>{producto.nombre}</Text>
      <Text style={styles.TarjetaTexto}>{producto.precio}</Text>
    </TouchableOpacity> )}

export default Tarjeta

const styles = StyleSheet.create({
  TarjetaContainer: {

  }
})