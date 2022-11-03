import { StyleSheet } from "react-native";


export const StyleLogin = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container:{
    alignItems: 'center',
    padding: 12,
    border: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#936',
    },
    textLogin:{
        margin: 10,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: "bold",
        color: '#fff',
    },
    input:{
        borderRadius: 5,
        marginTop: 25,
        margin: 5,
        padding: 10,
        width: 230,
        backgroundColor: '#fff',
    },
    Botton:{
        borderRadius: 5,
        marginTop: 35,
        height: 50,
        width: 150,
        padding: 5,
        alignItems: 'center',
        backgroundColor: "#939",
    },
    textBotton:{
        padding: 5,
        fontSize: 20,
        color: '#fff',
    },
    textCadastro:{
        padding: 4,
        marginTop: 5,
        fontSize: 12,
        fontWeight: "100",
        fontStyle: 'italic',
        color: 'snow',
        
    },
})