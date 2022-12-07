import { StyleSheet } from "react-native";


export const styleCadastro = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: 'rgb(26,26,26)',
    },
    botaoGoBack:{
        width: 72,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        marginTop: 35,
        border: 'solid',
        borderWidth: 1,
        borderColor: '#936',
    },
    container1:{
        alignItems: 'center',
        margin: 35,
    },
    imageContainer1:{
        width: 75, 
        height: 75,
    },
    container2:{
        flex: 2,
        justifyContent: 'center',
        padding: 12,
        width: '100%',
        height: '90%',
        backgroundColor: 'rgb(255,255,255)',
        border: 'solid',
        borderWidth: 1,
        borderTopEndRadius: 15,
        borderTopStartRadius: 15,
        borderColor: 'rbg(60,20,60)',
    },
    container3:{
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 15,
    },
    textLogin:{
        margin: 10,
        fontSize: 20,
        fontWeight: "bold",
        color: 'black',
    },
    inputText:{
        fontSize: 15,
    },
    input:{
        marginBottom: 20,
        padding: 10,
        height: 50,
        width: 300,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(60,10,60)',
        backgroundColor: '#fff',
    },
    botton:{
        borderRadius: 2,
        marginTop: 35,
        height: 40,
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#939",
    },
    textBotton:{
        padding: 5,
        color: "#fff",
    },
    botaoVoltar:{
        color: "#fff",
    }
})