import React from "react";
import { ScrollView, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

function Destinos({ navigation }) {
  function home() {
    navigation.navigate("Home");
  }
  return (
    <ScrollView style={{backgroundColor: '#FF6C01'}}>

        <Image 
          source={require('../../../assets/gol.png')} 
          style={{width: 180, height: 140, marginLeft: 90, marginBottom: 5}} 
        />

        <Text style={{marginLeft: '25%', marginBottom: 10, fontSize: 25}}>Rio de Janeiro</Text>
        <Image 
          source={require('../../../assets/rio.png')} 
          style={{width: 300, height: 140, marginLeft: 42.5, marginBottom: 40, borderWidth: 2, borderColor: '#fff'}} 
        />

        <Text style={{marginLeft: '25%', marginBottom: 10, fontSize: 25}}>Fortaleza</Text>
        <Image 
          source={require('../../../assets/fortal.png')} 
          style={{width: 300, height: 140, marginLeft: 42.5, marginBottom: 40, borderWidth: 2, borderColor: '#fff'}}  
        />

        <Text style={{marginLeft: '25%', marginBottom: 10, fontSize: 25}}>Brasilia</Text>
        <Image 
          source={require('../../../assets/brasilia.png')} 
          style={{width: 300, height: 140, marginLeft: 42.5, marginBottom: 40, borderWidth: 2, borderColor: '#fff'}}  
        />

        <Text style={{marginLeft: '25%', marginBottom: 10, fontSize: 25}}>Porto Alegre</Text>
        <Image 
          source={require('../../../assets/porto_alegre.png')} 
          style={{width: 300, height: 140, marginLeft: 42.5, marginBottom: 40, borderWidth: 2, borderColor: '#fff'}}  
        />

        <Text style={{marginLeft: '25%', marginBottom: 10, fontSize: 25}}>Curitiba</Text>
        <Image 
          source={require('../../../assets/curitiba.png')} 
          style={{width: 300, height: 140, marginLeft: 42.5, marginBottom: 40, borderWidth: 2, borderColor: '#fff'}}  
        />
     
      <TouchableOpacity style={styles.btn} onPress={home}>
        <Text style=
        {{fontSize: 26,
          borderWidth: 1,
          width: '19.8%',
          borderRadius: 4, backgroundColor: '#000', color: '#FFF', borderColor: '#fff', marginLeft: '38%', marginBottom: 20}}>
          Home
          </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default Destinos;
