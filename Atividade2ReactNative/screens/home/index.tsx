import { Text, TextInput, View } from "react-native";
import styles from "./styles";
import Inputs from "../../components/Inputs";
import Buttons from "../../components/Buttons";
import { useState } from 'react'

export default function Home() {
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const [textImc, setTextImc] = useState('')

    function handleCalculeIMC() {
       var imc = (altura * altura) / peso
        
       if(imc >= 18.6 && imc < 24.9){
            setTextImc('Peso Normal')
        }else if(imc >= 25 && imc < 29.9){
            setTextImc('Sobrepeso')
        }else if(imc >= 30 && imc < 34.9){
            setTextImc('Obesidade grau 1')
        }else if(imc >= 35 && imc < 39.9){
            setTextImc('Obesidade grau 2')
        }else if(imc >= 40){
            setTextImc('Obesidade grau 3 (Obesidade mórbida)')
        }else{
            setTextImc('Baixo Peso')
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Text style={styles.tittle}>Calculadora de IMC</Text>
                <Text style={styles.subTittle}>Descubra qual o seu índice de Massa Corporal</Text>
                <View style={styles.boxInputs}>
                    <View style={styles.labelsTop}>
                        <Text style={styles.textsTop}>Peso(Kg)</Text>
                        <Text style={styles.textsTop}>Altura(m)</Text>
                    </View>
                    <View style={styles.inputsTop}>

                        <Inputs onChangeInput={text => setPeso(text)} />
                        <Inputs onChangeInput={text => setAltura(text)} />
                    </View>
                    <View style={styles.buttons}>
                        <Buttons onExecute={handleCalculeIMC} />
                    </View>
                </View>
            </View>
            <View style={styles.middleView}>
                <View>
                    <Text style={styles.textsMiddle}>Seu índice de massa corporal é</Text>
                    <Text>{textImc}</Text>
                </View>
            </View>
            <View style={styles.bottomView}>

            </View>
        </View>
    )
}