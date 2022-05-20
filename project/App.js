import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Screens/Login";
import Dashboard from "./Screens/Dashboard";
import Schedule from "./Screens/Schedule";
import CalendarView from "./Screens/CalendarView";
import Protocols from "./Screens/Protocols";
import DayAgenda from "./Screens/DayAgenda";
import Settings  from "./Screens/Settings";
import PanicButton from "./Screens/PanicButton";
import VoiceRecorder from "./Screens/VoiceRecorder";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        { <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        /> }
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Schedules" component={Schedule} />
        <Stack.Screen name="CalendarView" component={CalendarView} />
        <Stack.Screen name="SettingsView" component={Settings} />
        <Stack.Screen name="Protocols" component={Protocols} />
        <Stack.Screen name="DayAgenda" component={DayAgenda} />
        <Stack.Screen name="PanicButton" component={PanicButton} />
        <Stack.Screen name="VoiceRecorder" component={VoiceRecorder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00ffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
