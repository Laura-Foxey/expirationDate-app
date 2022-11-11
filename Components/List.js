import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import {listData} from "../data.js"
import ListItem from './ListItem.js';
import SearchBar from './SearchBar.js';

export default function List({navigation}) {
  const [data, setData] = useState(listData);
  const [displayBy, setdisplayBy] = useState('');
  const [searchPhrase, setSearchPhrase] = useState("");

  //clears all data selections before navigating
  const navigateToItem = (item) => {
    setData(
      data.map((i) => ({...i, clicked: false, selected: false}))
    );
    navigation.push("ItemDetails", { item })
  }

  //expands item on click
  const onSetExpanded = (iid) => {
    setData(
    data.map((item) =>
        item.id === iid ? { ...item, clicked: !item.clicked } : item
    ))
  }

  //selects item on long click
  const onSetSelected = (iid) => {
    setData(
      data.map((item) =>
          item.id === iid ? { ...item, selected: !item.selected } : item
      )
    )
  }


  //invididual item render depending on search
  const renderItem = ({item}) => {
    if(searchPhrase === "") {
      return (
      <TouchableOpacity key={item.id} onPress={() => onSetExpanded(item.id)} onLongPress={() => onSetSelected(item.id)} style={item.selected ? styles.selected : styles.item}>
        <ListItem item={item} navigateToItem={navigateToItem}/>
      </TouchableOpacity>)
    }
    if (item.name.toLowerCase().includes(searchPhrase.toLowerCase().trim().replace(/\s/g, ""))) {
      return (
      <TouchableOpacity key={item.id} onPress={() => onSetExpanded(item.id)} onLongPress={() => onSetSelected(item.id)} style={item.selected ? styles.selected : styles.item}>
        <ListItem item={item} navigateToItem={navigateToItem}/>
      </TouchableOpacity> )

    }
  }

  console.log(data)
  console.log(displayBy)

  return (
      <SafeAreaView style={styles.container}>
        <Text>Products: </Text>
        <SearchBar searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase}/>
        <View>
          <TouchableOpacity onPress={() => setdisplayBy(displayBy==="Fridge" ? "" : "Fridge")}>
            <Text>Fridge</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setdisplayBy(displayBy==="Freezer" ? "" : "Freezer")}>
            <Text>Freezer</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setdisplayBy(displayBy==="Pantry" ? "" : "Pantry")}>
            <Text>Pantry</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <Text>Name</Text>
          <Text>Storage</Text>
          <Text>Expires in:</Text>
        </View>
        <View>
          <FlatList
            data={data}
            keyExtractor ={(item) => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <Image style={styles.plusIcon} source={require("../assets/3032220.png")} />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
    height: "95%",
  },
  header: {
    backgroundColor: 'orange',
    width: 300,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
    plusIcon : {
      width: 40, 
      height: 40
    },
    item: {
      backgroundColor: '#f9c2ff',
      marginVertical: 5,
      width: 300,
  },
  selected: {
      backgroundColor: 'red',
      marginVertical: 5,
      width: 300,
  },
});