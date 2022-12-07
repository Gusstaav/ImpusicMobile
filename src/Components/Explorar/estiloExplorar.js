import { StyleSheet } from 'react-native';

export const estiloExplorar = StyleSheet.create({
    Geral: {
        flex: 1,
        backgroundColor: 'rgb(20,20,20)' ,
    },
    Container: {
        alignItems: 'center',
        
    },
    thumbnailVideo: {
        height: 1080/5.5,
        marginHorizontal: 1,
        width: '100%',
        
    },
    tituloVideo:{
        fontSize: 16,
        color: '#fff',
        width: '100%',
        
    },
    canalVideo:{
        fontSize: 12,
        color: '#fff',
        width: '100%',
        marginBottom: 20,
    },
    fotoCanalVideo:{
        borderRadius: 100,
        width: 35,
        height: 35,
    },
    descricaoVideo:{
        flex: 1,
        marginLeft: '5%',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: 6
    },
    descricaoTextosVideo:{
        width: '100%',
        paddingLeft: 6,
        paddingRight: 6
    },
    Header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        height: 55,
        padding: 5,
    },
    botaoPerfil:{
        height: '80%',
        width: '10%',
        marginRight: 10,
    },
    textHeader:{
        color: "#939",
        fontSize: 15,
        padding: 5,
    },
    imageUser:{
        height: '100%',
        width: '100%',
        borderRadius: 50,
    }
})