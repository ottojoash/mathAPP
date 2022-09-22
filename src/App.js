import logo from './logo.svg';
import {Stylesheet, Text, View} from "react-native";
import './App.css';
import { Component } from 'react';

class App extends Component{
  render(){
    return(
      <View style={styles.root}>
        <Text>Battle Math</Text>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default App;
