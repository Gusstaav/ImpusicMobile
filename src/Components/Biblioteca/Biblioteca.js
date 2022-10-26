import React from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import {Feather} from '@expo/vector-icons';


import { estiloBiblioteca } from "./estiloBiblioteca";

export default function Biblioteca ({navigation}){
    return(
        <View style={estiloBiblioteca.Geral}> 
         <ScrollView  horizontal={true}>
            <View style={estiloBiblioteca.Container}>

                    <View style={estiloBiblioteca.containerVideo}>
                        <Image style={estiloBiblioteca.Video}
                        source={require('../../assets/images.jpg')}
                        />
                        <Text style={estiloBiblioteca.tituloVideo}>Titulo nada a ver com nada olha noo que deu kskssk</Text>
                    </View>
                    <View style={estiloBiblioteca.containerVideo} >
                        <Image style={estiloBiblioteca.Video}
                        source={require('../../assets/images.jpg')}
                        />
                        <Text style={estiloBiblioteca.tituloVideo}>Titulo nada a ver com nada olha noo que deu kskssk</Text>
                    </View>
                    <View style={estiloBiblioteca.containerVideo}>
                        <Image style={estiloBiblioteca.Video}
                        source={require('../../assets/images.jpg')}
                        />
                        <Text style={estiloBiblioteca.tituloVideo}>Titulo nada a ver com nada olha noo que deu kskssk</Text>
                    </View>
                    <View style={estiloBiblioteca.containerVideo}>
                        <Image style={estiloBiblioteca.Video}
                        source={require('../../assets/images.jpg')}
                        />
                        <Text style={estiloBiblioteca.tituloVideo}>Titulo nada a ver com nada olha noo que deu kskssk</Text>
                    </View>
                    <View style={estiloBiblioteca.containerVideo}>
                        <Image style={estiloBiblioteca.Video}
                        source={require('../../assets/images.jpg')}
                        />
                        <Text style={estiloBiblioteca.tituloVideo}>Titulo nada a ver com nada olha noo que deu kskssk</Text>
                    </View>
                </View>
       </ScrollView>
        <View style={estiloBiblioteca.ContainerBotao}>
       <Feather name="book" size={12} color={'#fff'} style={{margin: 30,}} >
            
            <TouchableOpacity 
            style={estiloBiblioteca.estiloBotao} 
            onPress={() => navigation.navigate ('Historico')}>
            <Text style={{color: '#fff',}}>  Historico</Text>
            </TouchableOpacity>    
        </Feather>
        </View>
       </View>
    );
}