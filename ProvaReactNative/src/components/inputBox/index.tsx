import { Text, TextInput, View } from "react-native"
import { styles } from "./styles"


type Props = {
    textValue: number
    textTittle: String
    onHandleChange: (value: any) => void
}

export const InputBox = (props: Props) =>{
    return(
        <View>
            <Text style={styles.textsStyle}>{props.textTittle}</Text>
            <TextInput style={styles.styleInput} onChangeText={props.onHandleChange} keyboardType='number-pad'>{props.textValue}</TextInput>
        </View>
    )
}