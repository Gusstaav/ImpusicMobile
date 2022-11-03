import { StyleSheet } from 'react-native';

export const estiloFeed = StyleSheet.create({
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
    }
})