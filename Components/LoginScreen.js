import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleLogin = () => {
    // Add your login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    onLogin(true);
  };

  const handleInputChange = (text, inputType) => {
    if (inputType === "email") {
      setEmail(text);
    } else if (inputType === "password") {
      setPassword(text);
    }

    // Check if both email and password fields are not empty
    setIsButtonDisabled(email.trim() === "" || password.trim() === "");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => handleInputChange(text, "email")}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCompleteType="email"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => handleInputChange(text, "password")}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity
        style={[styles.button, isButtonDisabled && styles.disabledButton]}
        onPress={handleLogin}
        disabled={isButtonDisabled}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>New to this app?</Text>
        <TouchableOpacity>
          <Text style={styles.signupLink}>Sign up for free</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: "100%",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    backgroundColor: "#25D366",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  disabledButton: {
    backgroundColor: "#25D36650", // 50% opacity of the green color
  },
  forgotPassword: {
    marginTop: 10,
  },
  forgotPasswordText: {
    textDecorationLine: "underline",
    color: "#25D366",
  },
  signupContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  signupText: {
    marginRight: 5,
  },
  signupLink: {
    textDecorationLine: "underline",
    color: "#25D366", // Green color similar to WhatsApp theme
  },
});

export default LoginScreen;
