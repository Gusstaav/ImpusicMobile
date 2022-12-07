import React, {useState} from 'react';
import {TextInput, TouchableOpacity, Text, View, Alert, Image, Keyboard} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { ipBd } from '../../../../controllerIP';


import { StyleLogin } from '../stylesLogin-Cadastro/styleLogin';



export default function Login ({navigation}){
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    

    //Fazer Login
    async function doLogin(){
        let reqs = await fetch('http://'+ipBd+'/rnmysql/verify-login.php?email='+email+'&password='+password, {
            method: 'POST',
            headers:{
                'Accep':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                senha: password,
                email: email,
            }) 
        });
        let ress = await reqs.json();
        if(ress == false ){
            Alert.alert("E-mail ou senha invalidos")
            return;
        }
        if(email === '', password === ''){
            Alert.alert("Todos os campos devem ser preenchidos")
            return;
        }
        else{ 
            navigation.navigate('Impusic', {
                user: ress.user,
                idUser: ress.id,
            });
        }
        
    }; 

    return(
        <View style={StyleLogin.body}>
            <Animatable.View style={StyleLogin.container1} animation="flipInX" delay={1000} >
                <Image 
                style={StyleLogin.imageContainer1}
                source={require('../../../../assets/logo-impusic.png')} />
            </Animatable.View>
                <Animatable.View animation="fadeInUp" delay={1000} style={StyleLogin.container2}>
                        <View style={{padding: 5, alignItems: 'center'}}>
                            <Text style={StyleLogin.textLogin}>Login</Text>
                        </View>
                            <View style={StyleLogin.container3}>
                                <Text style={StyleLogin.inputText}>Email</Text>
                                    <TextInput  style={StyleLogin.input}
                                    placeholder="email" 
                                    onChangeText={text=>setEmail(text)} />
                                    
                                <Text style={StyleLogin.inputText}>Senha</Text>                        
                                    <TextInput style={StyleLogin.input}
                                    placeholder="Senha" 
                                    secureTextEntry onChangeText={text=>setPassword(text)} />  
                            </View>
                                    <View style={{alignItems: 'center'}}>
                                            <TouchableOpacity style={StyleLogin.Botton}
                                            onPress={() => doLogin()}>
                                                <Text style={StyleLogin.textBotton}>Entrar</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={StyleLogin.BottonCadastro}
                                            onPress={() => navigation.navigate ('Cadastro')}>
                                                <Text style={StyleLogin.textCadastro}>Fazer cadastro</Text>
                                            </TouchableOpacity>
                                        </View>    
                    </Animatable.View>

        </View>
    );
}