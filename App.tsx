import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import RecipesScreen from "./Screens/RecipesScreen";

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Inicio" }} />
        <Stack.Screen name="Recipes" component={RecipesScreen} options={{ title: "Receta" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
