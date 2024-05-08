import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import LoginScreen from "./Components/LoginScreen";
import MainChatScreen from "./Components/MainChatScreen";
import ChatDetailScreen from "./Components/ChatDetailScreen";
import YouScreen from "./Components/YouScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (isLoggedIn) => {
    setIsLoggedIn(isLoggedIn);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen
              name="MainChat"
              component={MainChatScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="You"
              component={YouScreen}
              options={{ headerShown: false }}
              initialParams={{ onLogin: handleLogin }}
            />
          </>
        ) : (
          <Stack.Screen name="Login" options={{ headerShown: false }}>
            {(props) => <LoginScreen {...props} onLogin={handleLogin} />}
          </Stack.Screen>
        )}
        <Stack.Screen
          name="ChatDetail"
          component={ChatDetailScreen}
          options={{ headerShown: false }}
        />
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
    width: "100%",
  },
});
