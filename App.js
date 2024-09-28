import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from 'react-native';

import Animal from "./src/pages/Animal";
import Plantas from "./src/pages/Plantas";
import Fungos from "./src/pages/Fungi";
import Protista from "./src/pages/Protista";
import Monera from "./src/pages/Monera";
import Home from "./src/pages/Home";
import { StatusBar } from "expo-status-bar";

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <SafeAreaView style={{flex:1, marginTop: 50}}>
        <StatusBar/>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Reino Animal", headerShown: false }}
          />
          <Stack.Screen name="Animal" component={Animal} options={{headerShown: false}}/>
          <Stack.Screen name="Plantae" component={Plantas} options={{headerShown: false}} />
          <Stack.Screen name="Fungi" component={Fungos} options={{headerShown: false}} />
          <Stack.Screen name="Protista" component={Protista} options={{headerShown: false}} />
          <Stack.Screen name="Monera" component={Monera} options={{headerShown: false}} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
