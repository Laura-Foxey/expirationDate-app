import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import {useFonts} from "expo-font";

import Home from "./Screens/Home.js"
import Details from "./Screens/Details"
import ItemDetails from "./Screens/ItemDetails.js";
import AddItem from "./Screens/AddItem.js";
import EditItem from "./Screens/EditItem.js"

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
        <Stack.Screen name="Details" component={Details}/>
        <Stack.Screen name="ItemDetails" component={ItemDetails}/>
        <Stack.Screen name="AddItem" component={AddItem}/>
        <Stack.Screen name="EditItem" component={EditItem}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

