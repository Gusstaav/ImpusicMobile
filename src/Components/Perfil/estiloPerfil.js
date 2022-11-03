import { StyleSheet } from "react-native";

export const estiloPerfil = StyleSheet.create({
    container:{
        height: '50%',
        alignItems: 'center',
        backgroundColor: 'rgb(20,20,20)',
    },
    
    fotoPerfil: {
        marginTop: 12,
        height: '25%',
        width: '18%',
        borderRadius: 60,
    },
    textoPerfil: {
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

