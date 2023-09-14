import { Text, TextInput, View } from "react-native"
import { styles } from "./styles"


type Props = {
    textGrams: any
    textObject: any
    textExtra: any
    style: object
}

export const ViewBox = (props: Props) =>{
    return(
        <View style={props.style}>
            <Text style={styles.textGrams}>{props.textGrams}</Text>
            <Text style={styles.textObject}>{props.textObject}</Text>
            <Text style={styles.textExtra}>{props.textExtra}</Text>
        </View>
    )
}