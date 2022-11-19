import React, { useEffect, useState, useMemo, useCallback  } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native';
import ListItem from './ListItem.js';
import DisplayBy from './DisplayBy.js';

export default function List({navigation}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayBy, setDisplayBy] = useState('');
  const [searchPhrase, setSearchPhrase] = useState("");
  const [delReload, setDelReload] = useState(false);

  //clears all data selections before navigating
  const navigateToItem = (item) => {
      setData(
        data.map((i) => ({...i, clicked: false, selected: false}))
      );
        setDisplayBy("");
        setSearchPhrase("");
        navigation.navigate("ItemDetails", { item })
  }

  const navigateToAdd = () => {
    setData(
      data.map((i) => ({...i, clicked: false, selected: false}))
    );
      setDisplayBy("");
      setSearchPhrase("");
      navigation.navigate("AddItem", {})
}


  //expands item on click
  const onSetExpanded = (iid) => {
    setData(
      data.map((item) =>
          item._id === iid ? { ...item, clicked: !item.clicked } : item
    ))
  }

  //selects item on long click
  const onSetSelected = (iid) => {
    setData(
      data.map((item) =>
          item._id === iid ? { ...item, selected: !item.selected } : item
      )
    )
  }

  //count if there are more than one selection
  const countSelected = () => {
    let count = 0;
    data.forEach(i => {
      if(i.selected) {
        count++
        if(count > 1) {return true};
      }
      return false;
    })
  }

  //data fetch and filter, finish loading
  useEffect(() => {
    fetch("http://192.168.43.52:3000/products")
    .then(res => res.json())
    .then(data => setData(data
      .filter((d) => {
        if (displayBy === '' || d.storage.includes(displayBy)) {return d}
      })
      .filter((d) => {
        if(searchPhrase === '' || d.name.toLowerCase().includes(searchPhrase.toLowerCase())) {return d}
    })))
    .then(() => setLoading(false))
    .catch((error) => console.log('fetchToken error: ', error))
  }, [searchPhrase, displayBy, delReload])

  //delete element with confirmation pop-up
  const onDelete = (name, id) => {
    Alert.alert(
      "Object delete warning",
      `Are you sure you want to delete ${name}?`,
      [
        {
          text: "Cancel",
          onPress: () => { return ;},
          style: "cancel"
        },
        { text: "Confirm", onPress: () => {
          fetch(`http://192.168.43.52:3000/products/${id}`, { method: 'DELETE' })
          .then(async response => {
            const data = await response.json();
      
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }
          })
          .catch(error => {
              console.error('There was an error!', error);
          });
          setDelReload(prev => !prev)
        } 
      }]
    );
  }


  //invididual item render for FlatList
  const renderItem = ({item}) => {
      return (
      loading ? <Text> Loading... </Text> : 
      <TouchableOpacity onPress={() => onSetExpanded(item.name, item._id)} onLongPress={() => onSetSelected(item._id)}>
        <ListItem item={item} navigateToItem={navigateToItem} onDelete={onDelete}/>
      </TouchableOpacity>
    )
  }

  return (
      <SafeAreaView style={styles.container}>
        <Text>Products: </Text>
        <TextInput
          		placeholder="Search"
          		value={searchPhrase}
          		onChangeText={setSearchPhrase}
        	/>
        <DisplayBy displayBy={displayBy} setDisplayBy={setDisplayBy} />
        <View style={styles.header}>
          <Text>Name</Text>
          <Text>Storage</Text>
          <Text>Expires in:</Text>
        </View>
          <FlatList
            data={data}
            keyExtractor ={(item) => item._id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        <TouchableOpacity onPress={() => navigateToAdd()}>
          <Image source={require("../assets/add.png")} style={styles.plusIcon}/>
        </TouchableOpacity>
        <TouchableOpacity disabled={countSelected() ? true : false} >
          <Image source={require("../assets/multi-delete.png")} style={styles.plusIcon}/>
        </TouchableOpacity>
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
      height: 40,
    },
    selected: {
      backgroundColor: "purple",
      alignItems: 'center',
      marginVertical: 5,
      width: 300,
    },
});