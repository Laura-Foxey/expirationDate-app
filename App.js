import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import {useFonts} from "expo-font";

import Home from "./Screens/Home.js"
import Details from "./Screens/Details"
import ItemDetails from "./Screens/ItemDetails.js";
import AddItem from "./Screens/AddItem.js";
import EditItem from "./Screens/EditItem.js"
import CodeScanner from "./Screens/CodeScanner.js";
import AddBarcode from "./Screens/AddBarcode.js";
import ProductsList from "./Screens/ProductsList.js";
import BarcodesList from "./Screens/BarcodesList.js"
// import BarCodeList from "./Screens/BarCodeList.js";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}


const App = () => {
  const [loaded] = useFonts({
    ToThePointRegular: require("./assets/ToThePointRegular-n9y4.ttf"),
    TheConfessionRegular: require("./assets/TheConfessionRegular-YBpv.ttf")
  })

  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions= {{headerShown: false}} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="ProductsList" component={ProductsList} />
        <Stack.Screen name="BarcodesList" component={BarcodesList} />
        <Stack.Screen name="Details" component={Details}/>
        <Stack.Screen name="ItemDetails" component={ItemDetails}/>
        <Stack.Screen name="AddItem" component={AddItem}/>
        <Stack.Screen name="EditItem" component={EditItem}/>
        <Stack.Screen name="CodeScanner" component={CodeScanner}/>
        <Stack.Screen name="AddBarcode" component={AddBarcode}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

