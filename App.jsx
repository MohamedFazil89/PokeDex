import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators  } from "@react-navigation/stack";
// importing components
import Auth from "./Auth";
import StartPoke from "./Components/StarterPoke";
import Home from "./Components/HomeCom/Home";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator  screenOptions={{
         headerShown: false,
         gestureEnabled: true,
         gestureDirection: "horizontal",

         }} initalRouteName="Auth">
        <Stack.Screen   name="Auth" component={Auth} />
        <Stack.Screen   name="Starter" component={StartPoke} />
        <Stack.Screen   name="Home" component={Home} />


      </Stack.Navigator>
    </NavigationContainer>
    
  );
}