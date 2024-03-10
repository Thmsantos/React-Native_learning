import React from "react";
import {View, Text, TextInput, TouchableOpacity, Image,} from "react-native";

import styles from "./styles";

function Cadastro({ navigation }) {

  function Login(){
    navigation.navigate("Login")
    console.log('aaaaaa')
  }
  
  return (
    
      <View style={{ backgroundColor: '#FF6C01', paddingTop: 120, paddingBottom: 260}}>

        <Image 
          source={require('../../../assets/gol.png')} 
          style={{width: 180, height: 140, marginLeft: 90, marginBottom: 40}} 
        />  
        
          <View>
            <Text style={styles.titulo}>Cadastro</Text>
          </View>

          <View style={styles.inputs}>
            <TextInput
              placeholder="Novo email"
              style={styles.input}
            />
            <TextInput
              placeholder="Senha"
              style={styles.input}
            />     
            
            <TouchableOpacity style={styles.btn} onPress={Login}>
              <Text style={styles.texto}>Voltar</Text>
            </TouchableOpacity>

          </View>
      </View>
  );
}

export default Cadastro;
