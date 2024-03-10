import { StatusBar } from 'expo-status-bar';
import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native-web';
/* import { ImagePicker } from 'expo';
import * as firebase from 'firebase'; */

/* 7:32 https://www.youtube.com/watch?v=QQI2Hr2S5oY */

/* https://www.youtube.com/watch?v=KkZckepfm2Q */

import { db } from './Core/Config'


export default function App() {

  const [userDoc, setUserDoc] = useState(null)

 
  const [text, setText] = useState("")

  
/*   const onChooseImagePress = async () => {
    let result = await ImagePicker.launchCameraAsync();
    //let result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      this.uploadImage(result.uri, "test-image")
        .then(() => {
          Alert.alert("Success");
        })
        .catch((error) => {
          Alert.alert(error);
        });
    }
  }

  uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    var ref = firebase.storage().ref().child("images/" + imageName);
    return ref.put(blob);
  }
 */

  const Create = () =>{
      const myDoc = doc(db, "MyCollection", "MyDocument")

      const docData = {
        "Nome": "Batman"
      }

      setDoc(myDoc, docData)

      .then(() =>{
        alert("criado")
      })

      .catch((error)=> {
        alert(error.mesage)
      })
  }

  const Read = () => {

    const myDoc = doc(db, "MyCollection", "MyDocument")

    getDoc(myDoc)

    .then((snapshot) => {
      if (snapshot.exists) {
        setUserDoc(snapshot.data())
      }
      else {
        alert("No Doc Found")
      }
    })
    .catch((error) => {
      alert(error.message)
    })
      
  }

  const Update = (value, merge) =>{

    const myDoc = doc(db, "MyCollection", "MyDocument")

    setDoc(myDoc, value, { merge: merge })
      .then(() => {
        alert("uhuul")
        setText("")
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  const Delete = () =>{
    
    const myDoc = doc(db, "MyCollection", "MyDocument")

    deleteDoc(myDoc)

    .then(() => {
      alert("deletado")
    })
    .catch((error) => {
      alert(error.message)
    })

  }


  return (
    <View style={styles.container}>
      <Button title='Criar' onPress={Create}></Button>
      <Button title='ver dado' onPress={Read}></Button>
      {
        userDoc != null &&
        <Text>Nome: {userDoc.Nome}</Text>
      }
      <TextInput placeholder='atualizar' onChangeText={(text) => { setText(text) }} value={text}></TextInput>
      <Button title='updated' onPress={() => {
        Update({ 
          "Nome": text
        }, true) 
      }} disabled={text == ""} ></Button>
      <Button title='excluir dado' onPress={Delete}></Button>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
