import { Text, TouchableOpacity } from "react-native"
import { style } from "./styles"

type Props = {
    tittleButton: String
    onHandleChange: (value: any) => void
    styleButton: object
}

export const Buttons = (props: Props) =>{
    return(
        <TouchableOpacity style={props.styleButton} onPress={props.onHandleChange}>
            <Text style={style.colorText}>{props.tittleButton}</Text>
        </TouchableOpacity>
    )
}