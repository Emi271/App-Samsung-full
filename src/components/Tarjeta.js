import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Products from '../data/Productos.json'

const Tarjeta = () => {
  return (
    <View style={styles.TarjetaContainer}>
      <Image style={styles.TarjetaImagen} source={Products.ImgMiniatura}/>
      <Text style={styles.TarjetaTitulo}>{Products.nombre}</Text>
      <Text style={styles.TarjetaTexto}>{Products.precio}</Text>
      <TouchableOpacity />
    </View>
  )
}

export default Tarjeta

const styles = StyleSheet.create({
  
})