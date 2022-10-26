import React  from "react";
import { useState } from "react";
import { Alert } from "react-native";
import {View, TouchableOpacity, TextInput, Text} from "react-native";
import { styleCadastro } from "../stylesLogin-Cadastro/styleCadastro";

export default function Cadastro({navigation}){
    const [user, setUser] = useState(name)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    
    async function fazerCadastro(){
        let reqs = await fetch('http://192.168.0.17:3000/cadastro', {
            method: 'POST',
            headers:{
                'Accep':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                user: user,
                name: name,
                email: email,
                password: password
            })
        });
        let ress = await reqs.json();
        if(ress == 'error'){
            Alert.alert("Preencha os campos")
        }else{
            Alert.alert("Cadastro feito com sucesso")
            navigation.reset({ 
                index: 0,
                routes: [{name: "Login"}]
            })
        }
        
    
        
    }; 
    
    return(
    <View style={styleCadastro.body}>
        <View style={styleCadastro.container}>
            <Text style={styleCadastro.textCadastrar}>Cadastro</Text>
            
            <TextInput  style={styleCadastro.input}
            placeholder="Nome de usuario" 
            onChangeText={text=>setName(text)} />

            <TextInput  style={styleCadastro.input}
            placeholder="E-mail" 
            onChangeText={text=>setEmail(text)} />
            <TextInput style={styleCadastro.input}
            placeholder="Senha" 
            secureTextEntry onChangeText={text=>setPassword(text)} /> 

            <TouchableOpacity style={styleCadastro.botton}
            onPress={fazerCadastro}
            > 
                <Text style={styleCadastro.textBotton}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
}