import React from "react";
import {View, Text, TextInput, TouchableOpacity, Alert, Image,} from "react-native";

import styles from "./styles";

const apiUsuario = {

  email: "thiago123",
  senha: "456",
};

function Login({ navigation }) {
  function autenticacao() {
  
    if (apiUsuario.email === usuario && apiUsuario.senha === senha) {
      navigation.navigate("Home");
    } else {
      Alert.alert("Usuário inválido", "Digite um usuário válido!");
    }
  }

  function cadastro(){
    navigation.navigate("Cadastro")
    console.log('aaaaaa')
  }

  const [usuario, setUsuario] = React.useState("");
  const [senha, setSenha] = React.useState("");

  return (
    
      <View style={{ backgroundColor: '#FF6C01', paddingTop: 120, paddingBottom: 260}}>

        <Image 
          source={require('../../../assets/gol.png')} 
          style={{width: 180, height: 140, marginLeft: 90, marginBottom: 40}} 
        />  

          <View>
            <Text style={styles.titulo}>Bem vindo ao app da Gol!</Text>
          </View>

          <View style={styles.inputs}>
            <TextInput
              placeholder="Digite o email..."
              style={styles.input}
              value={usuario}
              onChangeText={(text) => setUsuario(text)}
            />
            <TextInput
              placeholder="Digite a senha..."
              style={styles.input}
              secureTextEntry={true}
              value={senha}
              onChangeText={(text) => setSenha(text)}
            />

            <TouchableOpacity style={styles.btn} onPress={autenticacao}>
              <Text style={styles.texto}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={cadastro}>
              <Text style={styles.texto}>Não tem conta? Cadastrar-se</Text>
            </TouchableOpacity>
            
          </View>
      
      </View>
  );
}

export default Login;
