import { View, TextInput } from 'react-native'
import { style } from './style'

export const Inputs = () => {
    return(
        <View style={style.container}>
            <TextInput placeholder='Adicione uma nova tarefa'></TextInput>
        </View>
    )
}