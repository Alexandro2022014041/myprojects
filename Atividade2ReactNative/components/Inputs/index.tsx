import { Text, TextInput, View } from "react-native";
import styles from "./styles";

type Props = {
    onChangeInput : (text: any) => void
}

export default function Inputs(props : Props){
    return(
        <View style={styles.container}>
            <TextInput onChangeText={text => props.onChangeInput(text)}
                keyboardType="decimal-pad" 
            ></TextInput>
        </View>
    )
}