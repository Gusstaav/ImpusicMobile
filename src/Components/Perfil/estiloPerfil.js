import { StyleSheet } from "react-native";

export const estiloPerfil = StyleSheet.create({
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
    fotoPerfil: {
        marginTop: 12,
        height: '20%',
        width: '17%',
        borderRadius: 100,
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
    },
    Header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 55,
        padding: 5,
        marginTop: 15,
    },
    botaoSair:{
        flexDirection: 'row',
        alignItems: 'center',
        height: '80%',
        width: '10%',
        marginRight: 17,
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

});

