import { useNavigation } from "@react-navigation/native";
import { useState } from "react"
import { Button, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"

export function Register(){

    const [name, setName] = useState('')
    const navigation = useNavigation()

    function handleNext(){
        navigation.navigate('result', {name})
    }

    function handleBack(){
        navigation.goBack
    }

    return(
        <SafeAreaView>
            <Text>Cesul</Text>

            <View>
                <Text>Informe seu nome</Text>
                <TextInput value="name" onChangeText={setName}/>
            </View>

            <View>
                <Text>Informe seu sobrenome</Text>
                <TextInput />
            </View>

            <View>
                <Button onPress={handleNext} title="Voltar" color={'#860929'}/>
                <Button onPress={handleBack} title="Proximo" color={'#01633D'}/>
            </View>

        </SafeAreaView>

    )

}