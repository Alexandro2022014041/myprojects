import { Alert, Button } from 'react-native'
import { Container, Input } from './styles'
import { useState } from 'react'
import { api } from '../../services/axios'

export const Login = () => {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () =>{
        api.post('/vendedor/login', {
            enail: username,
            senha: password
        }).then((response) => {
            const data = response.data
            console.log(data)
            Alert.alert('Login realizado com sucesso!')
        }).catch((error) => {
            console.log(error)
            Alert.alert('Problema ao realizar o login!')
        })
    }

    return(
        <Container>
            <Input value={username} onChangeText={setUsername}/>
            <Input keyboardType='visible-password' value={password} onChangeText={setPassword}/>
            <Button onPress={handleLogin} title='login'></Button>
        </Container>
    )
}