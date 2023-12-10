import { StyleSheet, View } from 'react-native'
import React from 'react'
import  colores  from '../global/colores'
const Navegation = () => {
  return (
    <View style={styles.NavegationContainer}>
  {/* iconos de la página que pasó el profe 
  DE MOMENTO ESTA BARRA DE NAVEGACIÓN NO LA VOY A UTILIZAR*/}
    </View>
  )
}

export default Navegation

const styles = StyleSheet.create({
    NavegationContainer: {
        bottom: 0,
        left: 0,
        right: 0,
        height: 40,
        position: 'absolute',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: colores.Fucsia}
})