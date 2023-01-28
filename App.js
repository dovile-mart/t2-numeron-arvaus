import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

  let randomNro;
  let arvaukset;

export default function App() {
    const [numero, setNumero] = useState(0);
    const [tulosTeksti, setTulosTeksti] = useState();
   
  const alku = () => {
    console.log('Peli alkaa')
    setTulosTeksti('Guess a number between 1-100');
    randomNro = Math.floor(Math.random() * 100) + 1;
    console.log('Arvattava numero: ' + randomNro);
    arvaukset=0;
  }

  useEffect(()=>{
    alku();
  }, [])
    
  const peli = () => {

    const onko = Number(numero);

    if (onko < randomNro){
      setTulosTeksti('Your guess ' + onko + ' is too low');
      arvaukset++;
      console.log('Arvausten määrä: ' + arvaukset);
    } else if (onko > randomNro){
      setTulosTeksti('Your guess ' + onko + ' is too high');
      arvaukset++;
      console.log('Arvausten määrä: ' + arvaukset);
    } else {
      arvaukset++;
      Alert.alert('You guessed the number in ' + arvaukset + ' guesses');
      console.log('Oikein, arvausten määrä: ' + arvaukset);
      alku();
    }
    setNumero(0);
  } 
 
  
return (
  <View style={styles.container}>
    <View style={styles.space}>
      <Text style={styles.text}>{tulosTeksti}</Text>
    </View>
    <View style={styles.input}>
      <TextInput keyboardType="numeric" value={numero} onChangeText={text => setNumero(text)}></TextInput>
    </View>
    <View style={styles.space}>
    <Button onPress={peli} title="Make guess"/>  
    </View>
    <StatusBar style="auto" />
  </View> 
);
}
 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width:100,
    border: 'grey',
    borderWidth:1    
    },
  text: {
    fontSize:18,
    fontWeight: 'bold'
  },
  space: {
    padding: 20
  }
});