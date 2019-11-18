import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View , 
  Dimensions, 
  Image,
  Button,
  TouchableOpacity,
  Switch,
  Picker,
  FlatList,
} from 'react-native'; 
//import ListProductScreen from './src/container/ListProductScreen';

import LoginScreen from './LoginScreen';

// import ListProductScreen from './src2/container/ListProductScreen';

export default class App extends React.Component {
  
  state = {
    isLogin: false,
  }
  
  cetakHalo(param){
    alert('HALOO');
    console.log('HALOO');
  }
  
  addPicker(){
    for (i = 0; i < 3; i++) 
    { 
      return(
        <Picker.Item label='agung'/>
      )
    }
  }

  login(){
    alert('berhasil login')
  }

  render(){
    return (
      // <LoginScreen fungsiLogin={() => this.login()} username='test'></LoginScreen>

      // <LoginScreen></LoginScreen>

      //<ListProductScreen></ListProductScreen>

      // <LoginScreen login={this.login}></LoginScreen>
      
      //<ListProductScreen></ListProductScreen>
    );
      
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorView: {
    flex: 1, 
    width: Dimensions.get('window').width, 
    height: Dimensions.get('window').height,
  },
  textStyle: {
    flex: 1,
  }
});
