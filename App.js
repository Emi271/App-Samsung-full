import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts }from 'expo-font';
import { useState } from 'react';
import Categorias from './src/screens/Categorias';
import ProductosPorCategoria from './src/screens/ProductosPorCategoria';

export default function App() {
const [categorySelected, setCategorySelected] = useState('')

  useFonts({
    'Quicksand-Light': require('./assets/Quicksand-Light.ttf'),
    'Quicksand-Medium': require('./assets/Quicksand-Medium.ttf'),
    'Quicksand-Regular': require('./assets/Quicksand-Regular.ttf')
  })
const onSelectedCategory = (category) => {
  setCategorySelected(category)
}

  return (
     <View style={styles.container}>
      <StatusBar style="auto" />
      {categorySelected ? <Categorias onSelectedCategoyEvent={onSelectedCategory} /> : <ProductosPorCategoria category={categorySelected}/>}
    </View> )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
