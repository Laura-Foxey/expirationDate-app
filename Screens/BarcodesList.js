import { View, Text, Button, StyleSheet, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { SafeAreaView } from 'react-native-web';

const BarcodesList = ({navigation}) => {
	const [loading, setLoading] = useState(true)
	const [barcodes, setBarCodes] = useState([]);


	//ask camera permissions, fetch barcodes
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
	<TouchableOpacity onPress={() => onSetExpanded(item._id)} onLongPress={() => onSetSelected(item._id)}>
		<Text></Text>
	</TouchableOpacity>
	)
}


  return (
	<SafeAreaView>
		{/* <FlatList
		data={barcodes}
		keyExtractor ={(item) => item._id}
		renderItem={renderItem}
		showsVerticalScrollIndicator={false}
		/> */}
    </SafeAreaView>
  )
}

export default BarcodesList

const styles = StyleSheet.create({
	
  });
