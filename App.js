import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts }from 'expo-font';
import { useState } from 'react';
import Categorias from './src/screens/Categorias';
import ProductosPorCategoria from './src/screens/ProductosPorCategoria';
import DetalleProducto from './src/screens/DetalleProducto';
import { colores } from './src/global/colores';

export default function App() {
const [categorySelected, setCategorySelected] = useState('')
const [productoSeleccionado, setProductoSeleccionado] = useState(null)

  useFonts({
    'Quicksand-Light': require('./assets/Quicksand-Light.ttf'),
    'Quicksand-Medium': require('./assets/Quicksand-Medium.ttf'),
    'Quicksand-Regular': require('./assets/Quicksand-Regular.ttf')
  })
const onSelectedCategory = (categoria) => {
  setCategorySelected(categoria)
  console.log("Categoría seleccionada:  ",categoria)
}
const onProductoSeleccionado = (productoID) => {
  setProductoSeleccionado(productoID)
}
  return (
     <View style={styles.container}>
      <StatusBar style="auto" />
      { productoSeleccionado ? <DetalleProducto productoID={productoSeleccionado}/> :
      categorySelected ? <ProductosPorCategoria categoria={categorySelected} onProductoSeleccionadoEvent={onProductoSeleccionado}  /> 
      : <Categorias onSelectedCategoyEvent={onSelectedCategory} /> }
    </View> )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colores.Fondo,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
