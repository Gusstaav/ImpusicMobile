import React from 'react';
import {TextInput, TouchableOpacity, Text, View, Alert} from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { StyleLogin } from '../stylesLogin-Cadastro/styleLogin';



export default function Login ({navigation}){
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    

    //Fazer Login
    async function doLogin(){
        let reqs = await fetch('http://192.168.0.17/rnmysql/verify-login.php?email='+email+'&password='+password, {
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
        if(ress == false){
            Alert.alert("E-mail ou senha invalidos")
        }
        if(email === '', password === ''){
            Alert.alert("Todos os campos devem ser preenchidos")
        }
        if(email === ''){
            Alert.alert("O preecha o campo do email")
        }
        if(password === ''){
            Alert.alert("O preecha o campo da senha")
        }
        else{
            
            let userData = await AsyncStorage.setItem('userData', JSON.stringify(ress))
            let resData = await AsyncStorage.getItem('userData');
            console.log(JSON.parse(resData))

            navigation.reset({
                index: 1,
                routes: [
                { name: 'Impusic' },
                ],
            })
        }
        
    }; 

    return(
        <View style={StyleLogin.body}>
            <View style={StyleLogin.container}>
                <Text style={StyleLogin.textLogin}>Login</Text>

                
            <TextInput  style={StyleLogin.input}
            placeholder="email" 
            onChangeText={text=>setEmail(text)} />
            
            
            <TextInput style={StyleLogin.input}
            placeholder="Senha" 
            secureTextEntry onChangeText={text=>setPassword(text)} />   
                
                <TouchableOpacity style={StyleLogin.Botton}
                onPress={() => doLogin()}>
                     <Text style={StyleLogin.textBotton}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={StyleLogin.BottonCadastro}
                onPress={() => navigation.navigate ('Cadastro')}>
                    <Text style={StyleLogin.textCadastro}>Fazer cadastro</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}