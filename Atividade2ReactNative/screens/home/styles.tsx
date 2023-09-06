import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
       flex:1
    },
    topView: {
        height: '45%',
        width: '100%',
        backgroundColor: '#967adc',
        alignItems: 'center'
    },
    tittle:{
        color: 'white',
        fontSize: 28,
        marginTop: 50,
        alignItems: 'center'
    },
    subTittle:{
        color: 'white',
        fontSize: 15,
        alignItems: 'center'
    },
    middleView: {
        height: '45%',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 100
    },
    bottomView: {
        height: '10%',
        backgroundColor: '#967adc'
    },
    boxInputs:{
        height: '100%',
        paddingTop: 50
    },
    inputsTop: {
        flexDirection: "row",
        gap: 60
    },
    labelsTop: {
        flexDirection: "row",
        gap: 140,
    },
    textsTop: {
        color: '#fff'
    },
    buttons: {
        height: '100%',
        paddingTop: 70
    },
    textsMiddle: {
        color: '#967adc',
        fontWeight: "bold"
    },
    textImc: {
        
    }
})