import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View  } from 'react-native';

import Login from './screens/Login';
import SignUpn from './screens/SignUp';
import Home from './screens/Home';
import Info from './screens/Info';
import Skills from './screens/Skills';
import Hobbies from './screens/Hobbies';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
            <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: "#262730" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUpn} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="Skills" component={Skills} />
        <Stack.Screen name="Hobbies" component={Hobbies} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});