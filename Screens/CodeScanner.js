import { View, Text, Button, StyleSheet, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner';

const CodeScanner = ({navigation}) => {
    const [hasPermission, setHasPermission] = useState(null);
	const [loading, setLoading] = useState(true)
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('');
	const [barcodes, setBarCodes] = useState([]);
	const [productNotFound, setProductNotFound] = useState(false);

    const askForCameraPermission = () => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status == "granted")
        })()
    }

	//ask camera permissions, fetch barcodes
    useEffect(() => {
		fetch("http://192.168.43.52:3000/barcodes")
			.then(res => res.json())
			.then(data => setBarCodes(data))
			.then(() => setLoading(false))
			.catch((error) => console.log('fetchToken error: ', error))
        askForCameraPermission();
    }, [])

	//check if scanend exists
	useEffect(() => {
		if(text && !loading) {
			const barcode = barcodes.find(item => item.code === text)
			if (!barcode) {
				Alert.alert(
					"Warning - Barcode not found!",
					"Would you like to add barcode to your preference list?",
					[
					{
						text: "No",
						onPress: () => { setScanned(false); setText('')},
					},
					{ text: "Yes", onPress: () => {
						navigation.navigate("AddBarcode", {})
					} 
					}]
				);
				
			} else { 
				Alert.alert(
					"Existing barcode!",
					`${barcode.name} - ${barcode.preference}`,
					[
					{
						text: "Close",
						onPress: () => { setScanned(false); setText('')},
					},
					{ text: "Edit barcode", onPress: () => {
						//add navigation
					} 
					}]
				);
			}
		}
  	}, [text])

    const handleScan = ({type, data}) => {
        setScanned(true);
        setText(data);
        console.log("Type: " + type + "\nData: " + data)
    }

    if (hasPermission === false) { 
        navigation.navigate("Home", {})
        setHasPermission(null);
    }


  return (
	<>
		<BarCodeScanner 
		onBarCodeScanned= {scanned ? undefined : handleScan} 
		style={[StyleSheet.absoluteFill, styles.container]}
		barCodeTypes={[BarCodeScanner.Constants.BarCodeType.codabar]}>
			<View style={styles.layerTop} />
			<View style={styles.layerCenter}>
				<View style={styles.layerLeft} />
				<View style={styles.focused} />
				<View style={styles.layerRight} />
			</View>
			<View style={styles.layerBottom} />
		</BarCodeScanner>
    </>
  )
}

export default CodeScanner

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
