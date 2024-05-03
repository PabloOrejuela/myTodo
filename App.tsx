import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions, FlatList } from 'react-native'

const tasks = [
  {
    title: 'Alimentar al perro',
    done: false,
    date: new Date()
  },
  {
    title: 'Estudiar react',
    done: false,
    date: new Date()
  },
  {
    title: 'Salir a correr',
    done: true,
    date: new Date()
  },
]

interface Task {
  title: string,
  done: boolean,
  date: Date
}

export default function App() {

  function renderItem({item}:{item:Task}){
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity>
          <Text style={item.done ? styles.textDone : styles.text}>
            {item.title}
          </Text>
          <Text style={item.done ? styles.textDone : styles.text}>
            {item.date.toLocaleDateString()}
          </Text>
        </TouchableOpacity>
        {
          item.done && 
          <TouchableOpacity style={styles.removeButton}>
            <Text style={styles.whiteText}>Eliminar</Text>
          </TouchableOpacity>
        }
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis tareas por hacer</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Agregar una tarea' />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.whiteText}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollContainer}>
        <FlatList
          data={tasks} 
          renderItem={renderItem}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 20,
    marginTop: 10
  },
  title:{
    fontSize: 20,
    color: "#6f6f6f",
  },
  text:{
    color: "#6f6f6f",
    fontSize: 16,
  },
  textDone:{
    color: "#6f6f6f",
    fontSize: 16,
    textDecorationLine: "line-through"
  },
  whiteText: {
    fontSize: 16,
    color: "#fff",
  },
  textInput:{
    borderColor: "#6f6f6f",
    borderWidth: 1,
    borderRadius: 7,
    fontSize: 12,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    width: Dimensions.get('screen').width * 0.6
  },
  inputContainer:{
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  addButton: {
    backgroundColor: '#5897fb',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 7,
    width: Dimensions.get('screen').width * 0.25
  },
  removeButton: {
    backgroundColor: '#f33D3D',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 7,
    width: Dimensions.get('screen').width * 0.25
  },
  scrollContainer: {

  },
  itemContainer:{
    flexDirection: "row",
    paddingVertical: 15,
    borderBottomColor: '#e4e4e4',
    borderBottomWidth: 1,
    justifyContent: "space-between"
  }
})
