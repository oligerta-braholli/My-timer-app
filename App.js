// Entry point for the app (for classic React Navigation projects)

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TimerProvider } from "./context/TimerContext";
import HomeScreen from "./screens/HomeScreen";
import LogScreen from "./screens/LogScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TimerProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Logs" component={LogScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TimerProvider>
  );
}
