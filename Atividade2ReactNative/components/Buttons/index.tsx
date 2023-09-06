import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

type Props = {
    onExecute : () => void
}

export default function Buttons(props : Props){
    return(
        <View style={styles.container}>           
            <TouchableOpacity onPress={props.onExecute}>
            <Text style={styles.texts}>CALCULAR</Text>
            </TouchableOpacity>
        </View>
    )
}