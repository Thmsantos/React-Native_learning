import React from "react";
import { ScrollView, Text, TouchableOpacity, Image, View, Button, TextInput } from "react-native";

function Passagem({ navigation }) {
  function home() {
    navigation.navigate("Home");
  }

  return (
    <ScrollView style={{backgroundColor: '#FF6C01'}}>
     
     <Image 
          source={require('../../../assets/gol.png')} 
          style={{width: 180, height: 140, marginLeft: 95, marginBottom: 60, marginTop: 70}} 
        />
     
      <TextInput
        placeholder="Destino"
        style={{
          backgroundColor: "white",
          width: "50%",
          marginLeft: '25%',
          padding: 8,
          marginTop: 12,
          borderWidth: 4,}}
      />

      <TextInput
        placeholder="Origem"
        style={{
          backgroundColor: "white",
          width: "50%",
          marginLeft: '25%',
          padding: 8,
          marginTop: 12,
          borderWidth: 4,}}
      />

      <TextInput
        placeholder="Data"
        style={{
          backgroundColor: "white",
          width: "50%",
          marginLeft: '25%',
          padding: 8,
          marginTop: 12,
          borderWidth: 4,}}
      />

      <TextInput
        placeholder="Horário"
        style={{
          backgroundColor: "white",
          width: "50%",
          marginLeft: '25%',
          padding: 8,
          marginTop: 12,
          borderWidth: 4,}}
        
      />

      <TouchableOpacity  onPress={home}>
      <Text style=
        {{
          fontSize: 20,
          borderWidth: 1,
          textAlign: 'center',
          width: 80,
          height: 35,
          borderRadius: 4,
          backgroundColor: '#000',
          color: '#FFF',
          borderColor: '#fff',
          marginLeft: '39%',
          marginTop: 80,
          marginBottom: 62}}>
          Home
          </Text>
      </TouchableOpacity>


    </ScrollView>
  );
}

export default Passagem;
