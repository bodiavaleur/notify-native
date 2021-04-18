import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { NoteEditPage, NotesPage, WelcomePage } from "./components/pages";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={WelcomePage} />
          <Stack.Screen name="Notes" component={NotesPage} />
          <Stack.Screen name="NoteEdit" component={NoteEditPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
