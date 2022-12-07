import React, {useState} from "react";
import {View, TouchableOpacity, TextInput, Text, Image, Alert, ScrollView} from "react-native";
import { styleCadastro } from "../stylesLogin-Cadastro/styleCadastro";
import * as Animatable from 'react-native-animatable';
import { ipBd } from "../../../../controllerIP";
import { Entypo } from '@expo/vector-icons'; 



export default function Cadastro({navigation}){
    const [user, setUser] = useState()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    
    async function fazerCadastro(){
        let reqs = await fetch('http://'+ipBd+'/rnmysql/register.php?name='+name+'&user='+user+'&email='+email+'&password='+password, {
            method: 'POST',
            headers:{
                'Accep':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name: name,
                user: user,
                email: email,
                password: password
            })
        });
        let ress = await reqs.json();
        if(ress == false){
            Alert.alert("Erro em algum campo por favor preencha mais uma vez");
        }else{
            Alert.alert("Cadastro feito com sucesso");
            navigation.navigate('Login');
        }
    }; 
    
    return(
    <ScrollView style={styleCadastro.body}>
        <TouchableOpacity onPress={() => navigation.goBack('Login')} style={styleCadastro.botaoGoBack}>
            <Text style={styleCadastro.botaoVoltar}> <Entypo name="back" size={14} color="#fff" /> Voltar</Text>
        </TouchableOpacity>

            <Animatable.View style={styleCadastro.container1} animation="flipInX" delay={500} >
                <Image 
                style={styleCadastro.imageContainer1}
                source={require('../../../../assets/logo-impusic.png')} />
            </Animatable.View>
                <Animatable.View animation="fadeInDown" delay={400} style={styleCadastro.container2}>
                        <View style={{padding: 5, alignItems: 'center'}}>
                            <Text style={styleCadastro.textLogin}>Cadastro</Text>
                        </View>
                            <View style={styleCadastro.container3}>
                                <Text style={styleCadastro.inputText}>Name</Text>
                                
                                    <TextInput  style={styleCadastro.input}
                                    placeholder="Name" 
                                    onChangeText={setName} />

                                    <Text style={styleCadastro.inputText}>User</Text>

                                    <TextInput  style={styleCadastro.input}
                                    placeholder="User" 
                                    onChangeText={setUser} />

                                    <Text style={styleCadastro.inputText}>Email</Text>

                                    <TextInput  style={styleCadastro.input}
                                    placeholder="email" 
                                    onChangeText={setEmail} 
                                    />
                                    
                                    <Text style={styleCadastro.inputText}>Senha</Text>                        

                                    <TextInput style={styleCadastro.input}
                                    placeholder="Senha" 
                                    secureTextEntry onChangeText={setPassword} />  
                            </View>

                                <View style={{ alignItems: 'center'}}>
                                    <TouchableOpacity style={styleCadastro.botton}
                                    onPress={() => fazerCadastro()}
                                    > 
                                        <Text style={styleCadastro.textBotton}>Cadastrar</Text>
                                    </TouchableOpacity>

                                </View>
                </Animatable.View>
        </ScrollView>
    
    );
}