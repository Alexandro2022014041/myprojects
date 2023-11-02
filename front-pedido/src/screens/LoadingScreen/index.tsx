import { ActivityIndicator, Text } from "react-native"
import { ContainerLoading } from "./style"

export const LoadingScreen = () =>{
    return(
        <ContainerLoading>
            <ActivityIndicator size='large' color='blue'/>
            <Text>Carregando...</Text>
        </ContainerLoading>
    )
}