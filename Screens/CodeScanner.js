import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner';

const CodeScanner = ({navigation}) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('');

    const askForCameraPermission = () => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status == "granted")
        })()
    }

    useEffect(() => {
        askForCameraPermission();
    }, [])

	 useEffect(() => {
		
  }, [])

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
		<BarCodeScanner onBarCodeScanned= {scanned ? undefined : handleScan} style={[StyleSheet.absoluteFill, styles.container]}>
			<View style={styles.layerTop} />
			<View style={styles.layerCenter}>
				<View style={styles.layerLeft} />
				<View style={styles.focused} />
				<View style={styles.layerRight} />
			</View>
			<View style={styles.layerBottom} />
		</BarCodeScanner>
      <Text> {text} </Text>
	  {scanned && <Button title="Scan again" onPress={() => setScanned(false)}/>}
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
