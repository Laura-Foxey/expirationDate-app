import { View, Text, Button, StyleSheet, Alert, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const BarcodesList = ({navigation}) => {
	const [loading, setLoading] = useState(true)
	const [barcodes, setBarCodes] = useState([]);


	//fetch barcodes
    useEffect(() => {
		fetch("http://192.168.43.52:3000/barcodes")
			.then(res => res.json())
			.then(data => setBarCodes(data))
			.then(() => setLoading(false))
			.catch((error) => console.log('fetchToken error: ', error))
    }, [])


console.log(barcodes);

const renderItem = ({item}) => {
	return (
	loading ? <Text> Loading... </Text> : 
	<TouchableOpacity>
		<Text>{item.name}</Text>
		<Text>{item.preference}</Text>
		<Text>{item.code}</Text>
	</TouchableOpacity>
	)
}


  return (
	<SafeAreaView>
		<FlatList
          data={barcodes}
          keyExtractor ={(item) => item.code}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
    </SafeAreaView>
  )
}

export default BarcodesList

const styles = StyleSheet.create({
	
  });
