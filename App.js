import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/Home/HomeScreen";
import GameScreen from "./Screens/Game/GameScreen";
import LessonScreen from "./Screens/Lesson/LessonScreen";
import ReferenceScreen from "./Screens/References/ReferenceScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="Lesson" component={LessonScreen} />
        <Stack.Screen name = "Reference" component={ReferenceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
