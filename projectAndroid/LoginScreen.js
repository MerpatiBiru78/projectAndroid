import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  Dimensions,
  TouchableOpacity,
  Switch
} from 'react-native';

export default class LoginScreen extends React.Component{
    
    state = {
        username: '',
        password: '',
        agreement: false,
    }
    
    onLogin(){
        if(this.state.username === 'test' && this.state.password === '1234'){
            const login = this.props.fungsiLogin;
            login();
        }
        else{
            alert('gagal login');
        }
    }
    
    render(){
        return(
            <View style={styles.container}>
                <TextInput
                    style={styles.inputText}
                    placeholder='username'
                    placeholderTextColor='red'
                    value={this.state.username}
                    onChangeText={(username) => this.setState({username: username})}
                ></TextInput> 
                <TextInput
                    style={styles.inputText}
                    placeholder='password'
                    placeholderTextColor='red'
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={(password) => this.setState({password: password})}
                ></TextInput> 

                <View style={{flexDirection: 'row', marginTop: 10}}>
                    <Switch
                        value={this.state.agreement}
                        onValueChange={(agreement) => this.setState({agreement: agreement})}
                    ></Switch>
                    <Text>Saya menyetujui syarat dan ketentuan</Text>
                </View>

                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => this.onLogin()}
                    disabled={!this.state.agreement}
                >
                    <Text style={{color: 'white'}}>LOGIN</Text>
                </TouchableOpacity>
            </View>
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
    inputText: {
        fontSize: 20,
        width: Dimensions.get('window').width * 0.7,
        borderBottomWidth: 1,
    },
    btnLogin: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').height * 0.05,
    },
})