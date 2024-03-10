import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "../screens/Login";
import Destinos from "../screens/Destinos";
import Home from "../screens/Home";
import Passagem from "../screens/Passagem";
import Cadastro from "../screens/Cadastro";

const Rotas = {

  Login: {
    nome: "Login",
    screen: Login,
  },
  
  Passagem: {
    nome: "Passagem",
    screen: Passagem
  },  

  Cadastro:{
    nome: "Cadastro",
    screen: Cadastro,
  },
  

  Passagem: {
    nome: "Passagem",
    screen: Passagem
  },
  
  Destinos: {
    nome: "Destinos",
    screen: Destinos,
  },

 
  Home: {
    nome: "Home",
    screen: Home,
  }
  
  
};
// Criar as Rotas
const Navegacao = createSwitchNavigator(Rotas);
// Passar para o App
export default createAppContainer(Navegacao);
