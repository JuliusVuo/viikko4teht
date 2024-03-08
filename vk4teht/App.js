import {StatusBar, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { DATA } from './Data';
import Row from './Components/Row';
import Search from './Components/Search';
import { useState, useEffect } from 'react';


export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(DATA);
  },[])

  const executeSearch= (search) => {
    const searchArray= DATA.filter((item) => item.lastname.startsWith(search));
    setItems(searchArray);
  }


  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch}/>
      <FlatList
        data={items}
        renderItem={({item})=>(
          <Row person={item}/>
        )}
      >
      </FlatList>
    </SafeAreaView>
  );
}
/*
const renderItem = ({item}) => (
  <Text>{item.lastname}</Text>
);
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
