import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"

export function Result(){

    const navigation = useNavigation()

    function handleBack(){
        navigation.goBack
    }

    function handleFinish(){
        navigation.navigate('home')
    }

    return (
        <SafeAreaView>
            <Text>CESUL</Text>

            <Text>Olá, Cleiton Migliorini</Text>

            <Text>numero do seu cupom é :</Text>

            <Text>424242</Text>

            <View>
                <Button onPress={handleBack} title="Voltar" color={'#860929'}/>
                <Button onPress={handleFinish} title="Finalizar" color={'#01633D'}/>
            </View>

        </SafeAreaView>
    )

}