import { View, FlatList } from 'react-native'

type Props = {
    Function : object
}

export const FlatLists = (props : Props) =>{
    return(
        <View>
            <FlatList data={[]} 
                      keyExtractor={item => item}
                      renderItem={({item}) => 
                      }></FlatList>
        </View>
    )
}