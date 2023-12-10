import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {colores} from '../global/colores'
import Productos from '../data/Productos.json'

const Categorias = ({onSelectedCategoyEvent}) => {

  const mostrarCategorias = ({item}) => (
    <TouchableOpacity  onPress={() => onSelectedCategoyEvent(item)}>
      <Text style={styles.Texto}>{item}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.CategoriasContainer}>
      <Text style={styles.CategoriasTitulo}>Categorias</Text>
      <FlatList 
      renderItem={mostrarCategorias}
      keyExtractor={item => item}
      data={Productos}/>
    </View>
  )
}

export default Categorias

const styles = StyleSheet.create({
  CategoriasTitulo: {
    color: colores.Lily
  }

})