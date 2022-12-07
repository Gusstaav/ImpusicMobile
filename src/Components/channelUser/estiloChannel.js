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
    follows:{
        color: 'rgb(220,220,220)',
        fontSize: 12,
    },
    textoDescription:{
        padding: 1,
        fontSize: 12,
        color: 'rgb(220,220,220)',
    },
    fotoBanner:{
        borderRadius: 15,
        resizeMode: 'cover',
        width: '100%',
        height: '40%',
    },
    Header:{
        backgroundColor: 'rgb(20,20,20)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        marginTop: 15,
        padding: 5,
    },
    botaoGoBack:{
        width: 72,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        border: 'solid',
        borderWidth: 1,
        borderColor: '#936',
    },
    botaoVoltar:{
        color: "#fff",
    }


});

