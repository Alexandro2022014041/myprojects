import { Alert, Button } from 'react-native'
import { Container, Input } from './styles'
import { useState } from 'react'
import { api } from '../../services/axios'
import { LoadingScreen } from '../LoadingScreen'

export const Login = () => {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleLogin = () =>{
        setLoading(true)
        api.post('/vendedor/login', {
            enail: username,
            senha: password
        }).then((response) => {
            const data = response.data
            console.log(data)
            setLoading(false)
            Alert.alert('Login realizado com sucesso!')
        }).catch((error) => {
            console.log(error)
            setLoading(false)
            Alert.alert('Problema ao realizar o login!')
        })
    }

    return(
        <Container>
            <Input value={username} onChangeText={setUsername}/>
            <Input keyboardType='visible-password' value={password} onChangeText={setPassword}/>
            <Button onPress={handleLogin} title='login'></Button>
            {
                loading && <LoadingScreen/>
            }
        </Container>
    )
}