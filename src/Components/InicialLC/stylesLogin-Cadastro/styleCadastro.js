import { StyleSheet } from "react-native";


export const styleCadastro = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: "#D3D3D3",
        justifyContent: 'center',
        alignItems: 'center',
    },
    container:{
    justifyContent: "center",
    alignItems: 'center',
    height: 330,
    width: 280, 
    },

    textCadastrar:{
        marginTop: 10,
        marginBottom: 5,
        fontSize: 20,
        color: '#fff',
    },
    input:{
        borderRadius: 10,
        marginTop: 20,
        padding: 10,
        width: 230,
        borderColor: "#396",
        shadowColor: "#396",
        backgroundColor: '#fff',
    },
    botton:{
        marginTop: 30,
        height: 40,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#938',
    },
    textBotton:{
        padding: 5,
        color: "#fff",
    },
})