import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';
import MyButton from './components/MyButton';
import Button from './components/MyButton'

export default function App() {
  const [input, setInput] = useState('')
  const [color, setColor] = useState('red')
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://www.igeargeek.com/_nuxt/img/835647d.png' }}
        style={styles.logo}
      />
      <Text style={styles.title}>Hello World</Text>
      <TextInput
        value={input}
        onChangeText={(text) => { setInput(text) }}
        placeholder="Input Here"
        style={styles.Input}
      />
      <Text style={{ fontSize: 18, marginTop: 20, color: color }}
      >
        {input}</Text>
      <View style={styles.buttonLayout}>
        <MyButton title="Red" color="red" onChangeColor={(color) => setColor(color)}/>
        <MyButton title="Blue" color="blue" onChangeColor={(color) => setColor(color)}/>
        <MyButton title="Green" color="green" onChangeColor={(color) => setColor(color)}/>
      </View>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  logo: {
    width: 150,
    height: 150
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  Input: {
    height: 40,
    borderStyle: 'solid',
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginTop: 20
  },
  buttonLayout: {
    flexDirection: 'row',
    marginTop: 20,
  }
});
