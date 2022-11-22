import { StyleSheet } from "react-native";

export const estiloChannel = StyleSheet.create({
    container:{
        height: '50%',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'rgb(14,14,14)',
    },
    containerDados:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    dados:{
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    fotoChannel: {
        marginTop: 12,
        height: '20%',
        width: '17%',
        borderRadius: 100,
    },
    textoChannel: {
        padding: 2,
        fontSize: 14,
        marginHorizontal: 'auto',
        color: '#fff',
    },
    textoDescription:{
        padding: 1,
        fontSize: 12,
        color: 'rgb(220,220,220)',
    },
    fotoBanner:{
        resizeMode: 'cover',
        width: '100%',
        height: '40%',
    }

});

