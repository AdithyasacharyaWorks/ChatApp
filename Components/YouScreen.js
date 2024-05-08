import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const YouScreen = ({ navigation, route }) => {
  const { onLogin } = route.params; // Destructure onLogin from route.params

  const handleLogout = () => {
    console.log("logout is hit");
    onLogin(false);
    // Navigate to Login screen only if user is logged in
    if (navigation.canGoBack()) {
      navigation.goBack(); // Go back to the previous screen (MainChatScreen)
    } else {
      navigation.navigate("Login"); // Navigate to Login screen if there's no previous screen
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>You screen</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: "#25D366",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default YouScreen;
