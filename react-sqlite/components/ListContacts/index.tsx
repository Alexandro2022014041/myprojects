import { useEffect, useState } from "react"
import { Button, FlatList, Text, ToastAndroid, View } from "react-native"
import { deleteContact, getContacts } from "../../db/Database"
import { style } from "./style"

export const ListContacts = () => {
    const [contacts, setContacts] = useState<{_id: number, name: string, phone: string}[]>([])
    
    const refreshList = async () =>{
        const data = await getContacts()
        setContacts(data)
    }

    const handleDeleteContact = async (id: number) => {
        try {
            await deleteContact(id);
            ToastAndroid.show('Removido com sucesso!', ToastAndroid.SHORT)
            refreshList();
        } catch (error: any) {
            console.error('Erro ao excluir o contato: ' + error.message);
        }
    };

    useEffect(() => {
        refreshList()
    }, [])

    return(
        <View style={style.container}>
            <Text style={style.title}>Lista de Contatos</Text>
            <FlatList 
                data={contacts}
                keyExtractor={(contact) => contact._id.toString()}
                renderItem={({item}) => (
                    <View style={style.contactItem}>
                        <Text style={style.contactName}>{item.name}</Text>
                        <Text style={style.contactPhone}>{item.phone}</Text>
                        <Button title="Excluir" 
                                onPress={() => handleDeleteContact(item._id)}
                                color="#ff3358"/>
                    </View>
            )}/>
        </View>
    )
}