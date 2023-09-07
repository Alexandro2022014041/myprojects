import { useState } from "react"
import { Button, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native"
import { addContact } from "../../db/Database"
import { style } from "./style"

type Props = {
    onRefreshList: () => void
}

export const AddContacts = (props : Props) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const handleAddContact = () => {
        addContact(name, phone)
        setName('')
        setPhone('')
        props.onRefreshList()
        ToastAndroid.show('Adicionado com sucesso!', ToastAndroid.SHORT)
    }

    return(
        <View style={style.container}>
                <Text>Nome</Text>
                <TextInput value={name} onChangeText={setName}/>

                <Text>Telefone</Text>
                <TextInput keyboardType="number-pad" value={phone} onChangeText={setPhone}/>

                <Button title="Adicionar Contato" onPress={handleAddContact}/>
        </View>

    )
}