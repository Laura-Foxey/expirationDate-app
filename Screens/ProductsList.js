import React, { useEffect, useState, useMemo, useCallback  } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ListItem from '../Components/ProductsListDetails.js';
import DisplayBy from '../Components/DisplayBy.js';

export default function ProductsList({navigation}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayBy, setDisplayBy] = useState('');
  const [searchPhrase, setSearchPhrase] = useState("");
  const [orderBy, setOrderBy] = useState('expirationDate');
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'Expiration Date ↓', value: 'expirationDate'},
    {label: 'Expiration Date ↑', value: 'expirationDateRev'},
    {label: 'Alphabetically ↓', value: 'alphabetically'},
    {label: 'Alphabetically ↑', value: 'alphabeticallyRev'},
  ]);
  const [delReload, setDelReload] = useState(false);
  const [disable, setDisable] = useState(true);

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

  //order by selection
  const dataOrderBy = (a, b) => {
    var dateA = new Date(a.expiration).getTime();
    var dateB = new Date(b.expiration).getTime();
    switch (orderBy) {
      case "expirationDate":
        return dateA > dateB ? 1 : -1;
      case "expirationDateRev":
        return dateA < dateB ? 1 : -1;
      case "alphabetically":
        return a.name > b.name ? 1 : -1;
      case "alphabeticallyRev":
        return a.name < b.name ? 1 : -1;
      default:
        return dateA > dateB ? 1 : -1;
    }
  }

  //data fetch and filter, finish loading
  useEffect(() => {
    fetch("http://192.168.43.52:3000/products")
    .then(res => res.json())
    .then(data => setData(data
      .sort(dataOrderBy)
      .filter((d) => {
        if (displayBy === '' || d.storage.includes(displayBy)) {return d}
      })
      .filter((d) => {
        if(searchPhrase === '' || d.name.toLowerCase().includes(searchPhrase.toLowerCase())) {return d}
    })))
    .then(() => setLoading(false))
    .catch((error) => console.log('fetchToken error: ', error))
  }, [searchPhrase, displayBy, orderBy, delReload])


  useEffect(() => {
    if (data.filter((item) => item.selected).length >= 2) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [data])

  //delete request with confirmation pop-up
  const alertDelete = (typeString, confirmationString, url) => {
    Alert.alert(
      `${typeString} delete warning`,
      confirmationString,
      [
        {
          text: "Cancel",
          onPress: () => { return ;},
          style: "cancel"
        },
        { text: "Confirm", onPress: () => {
          fetch(url, { method: 'DELETE' })
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

    //delete element
    const onDelete = (name, id) => {
      const confString = `Are you sure you want to delete ${name}?`;
      const url = `http://192.168.43.52:3000/products/${id}`;
      alertDelete("Product", confString, url)
    }
  
    //multiple delete elements
    const onMultipleDelete = () => {
      let count = 0;
      let arr = [];
      data.forEach(i => {
        if(i.selected) {
          count++
          arr = arr + `${i._id},`;
        }})
      arr = arr.substring(0, arr.length - 1);
      const confString = `Are you sure you want to delete ${count} products?`
      const url = `http://192.168.43.52:3000/products/arr/${arr}`;
      alertDelete("Multiple", confString, url);
    }


  //invididual item render for FlatList
  const renderItem = ({item}) => {
      return (
      loading ? <Text> Loading... </Text> : 
      <TouchableOpacity onPress={() => onSetExpanded(item._id)} onLongPress={() => onSetSelected(item._id)}>
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
        <DropDownPicker
          open={open}
          value={orderBy}
          items={items}
          setOpen={setOpen}
          setValue={setOrderBy}
          setItems={setItems}
          theme="LIGHT"
      />
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
        <TouchableOpacity onPress={() => onMultipleDelete()} disabled={disable}>
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