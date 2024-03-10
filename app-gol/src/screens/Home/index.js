import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

function Home({ navigation }) {
  function destinos() {
    navigation.navigate("Destinos");
  }

  function passagem() {
    navigation.navigate("Passagem");
  }

  function login() {
    navigation.navigate("Login");
  }
  return (
    <View style={{backgroundColor: '#FF6C01', paddingTop: 100, paddingBottom: 140}}>

        <Image 
          source={require('../../../assets/gol.png')} 
          style={{width: 180, height: 140, marginLeft: 95, marginBottom: 80}} 
        /> 

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Destinos")}>
        <Text style={{color: '#000', marginLeft: 40, marginBottom: 20, marginTop: 6.725, fontSize: 20}}>Ver destinos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={passagem}>
        <Text style={{color: '#000', marginLeft: 38, marginBottom: 20, marginTop: 6.625, fontSize: 20}}>Ver passagens</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={login}>
        <Text style={{color: '#000', marginLeft: 38, marginBottom: 1, marginTop: 6.625, fontSize: 20}}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
