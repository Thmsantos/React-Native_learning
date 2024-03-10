import React from 'react';
import { View, Text, StatusBar,} from 'react-native';


import Routes from './src/routes';


function App() {
  return (
    <View>
      <StatusBar />
     
      <Routes />
    </View>
  )
}

export default App;