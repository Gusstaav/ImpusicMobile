import { StyleSheet } from 'react-native';

export const estiloBiblioteca = StyleSheet.create({
    Geral: {
        backgroundColor: '#212121',
        flex: 1,
    },
    Container: {
    marginTop: 10,
    flexDirection: 'row',
    marginLeft: 5,
    padding: 5, 
    border: 'solid',
    borderTopColor: '#fff',
    borderBottomColor: '#fff',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderWidth: 2,
    },
    containerVideo:{
        marginTop: 15,
        flexDirection: 'row',
    },
    
    Video: {
    height: 100,
    width: 120,
    marginRight: 5,
    },

    tituloVideo:{
    fontSize: 15,
    padding: 3,
    color: '#fff',
    },

    ContainerBotao:{
        flex: 20,
    },
    estiloBotao:{
        backgroundColor: 'transparent', 
        width: 100,
        borderRadius: 20,
    },
})