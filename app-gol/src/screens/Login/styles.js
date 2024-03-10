import { StyleSheet, Plataform } from "react-native";

const styles = StyleSheet.create({
  caixa: {
    height: "100%",
  },
  fundo: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    color: "#000",
    fontSize: 25,
    marginLeft: 47,
    fontWeight: 600
  },
  inputs: {
    width: "100%",
    padding: 8,
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    padding: 8,
    marginTop: 12,
    borderWidth: 4,
  },
  btn: {
    backgroundColor: "black",
    marginTop: 12,
    padding: 8,
    borderRadius: 4,
  },
  texto: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
});

export default styles;
