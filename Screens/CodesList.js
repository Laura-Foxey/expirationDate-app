import { View, Text, Button, StyleSheet, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { SafeAreaView } from 'react-native-web';

const CodesList = ({navigation}) => {
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




  return (
	<SafeAreaView>
		
    </SafeAreaView>
  )
}

export default CodesList

const opacity = 'rgba(0, 0, 0, .8)';
const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  flexDirection: 'row'
	},
	layerTop: {
	  flex: 2,
	  backgroundColor: opacity
	},
	layerCenter: {
	  flex: 5,
	  flexDirection: 'column'
	},
	layerLeft: {
	  flex: 5,
	  backgroundColor: opacity
	},
	focused: {
	  flex: 20
	},
	layerRight: {
	  flex: 5,
	  backgroundColor: opacity
	},
	layerBottom: {
	  flex: 2,
	  backgroundColor: opacity
	},
  });
