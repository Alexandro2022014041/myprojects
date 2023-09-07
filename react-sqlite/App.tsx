import { initDatabase } from './db/Database';
import { AddContacts } from './components/AddContacts';
import { ListContacts } from './components/ListContacts';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react'

initDatabase()

export default function App() {
  const [listRefreshKey, setListRefreshKey] = useState<number>(0)
  
  const refreshContactList = () => {
    setListRefreshKey((prevKey) => prevKey + 1)
  }

  return (
    <View style={style.container}>
      <AddContacts onRefreshList={refreshContactList}/>
      <ListContacts key={listRefreshKey}/>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
  }
})
