import { StyleSheet } from "react-native";


export const StyleLogin = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: 'rgb(23,23,23)',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    container1:{
        margin: 35,
    },
    imageContainer1:{
        width: 75, 
        height: 75,
    },
    container2:{
        justifyContent: 'center',
        padding: 12,
        width: '100%',
        height: '70%',
        backgroundColor: 'rgb(255,255,255)',
        border: 'solid',
        borderWidth: 1,
        borderRadius: 15,
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
    Botton:{
        borderRadius: 5,
        marginTop: 35,
        height: 40,
        width: 130,
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
        color: 'black',
        
    },
})