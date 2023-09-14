import { Text, TextInput, View } from "react-native"
import { styles } from "./styles"


type Props = {
    textTotal: any
    style: object
}

export const InputBoxTotal = (props: Props) =>{
    return(
        <View style={props.style}>
            <Text style={styles.textTotal}>{props.textTotal}</Text>
            <Text style={styles.textObject}>Total</Text>
        </View>
    )
}