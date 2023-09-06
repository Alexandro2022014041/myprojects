import { Alert, Text, TextInput, TouchableOpacity, View, ScrollView, FlatList } from 'react-native';
import { styles } from './styles';
import { Participante } from '../../components/Participante';

export default function Home() {

    const participantes = ['Alexandro', 'Carlos', 'Lucas', 'Rodolfo', 'Mauricio', 'Alexandro', 'Carlos', 'Lucas', 'Rodolfo', 'Mauricio', 'Alexandro', 'Carlos', 'Lucas', 'Rodolfo', 'Mauricio', 'Alexandro', 'Carlos', 'Lucas', 'Rodolfo', 'Mauricio', 'Alexandro', 'Carlos', 'Lucas', 'Rodolfo', 'Mauricio', 'Alexandro', 'Carlos', 'Lucas', 'Rodolfo', 'Mauricio', 'Alexandro', 'Carlos', 'Lucas', 'Rodolfo', 'Mauricio', 'Alexandro', 'Carlos', 'Lucas', 'Rodolfo', 'Mauricio' ,'Alexandro', 'Carlos', 'Lucas', 'Rodolfo', 'Mauricio']

    function handleParticipante() {
        console.log("Estamos adicionando um participante")
    }

    function handleParticipanteRemove(){
        Alert.alert('Remover!', 'Remover participante')
    }

    return (

        <View style={styles.container} >
            <Text style={styles.title} >Nome do Grupo</Text>
            <Text style={styles.data} >Quarta, 16 de agosto</Text>

            <View style={styles.form} >
                <TextInput style={styles.input} />

                <TouchableOpacity style={styles.button} onPress={handleParticipante} >
                    <Text style={styles.textButton} >+</Text>
                </TouchableOpacity>
            </View>
            
            <Text style={styles.title}>Participantes</Text>
            <FlatList
                data={[]}
                keyExtractor={item => item}
                renderItem={ ({item}) => (
                    <Participante key={item} 
                                  name={item} 
                                  onRemove={handleParticipanteRemove}/>
                )}
                ListEmptyComponent={ () => <Text style={styles.listEmpty}> Sem participantes </Text> }
            />
            {/* <ScrollView>
            {
                participantes.map(participante => (
                    <Participante key={participante} name={participante} onRemove={handleParticipanteRemove}/>
                ))
            }
            </ScrollView> */}
        </View>
    )
}