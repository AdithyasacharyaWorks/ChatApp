// ChatDetailScreen.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChatDetailScreen = ({ route }) => {
  // Extracting parameters passed from navigation
  const { chat } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat Detail</Text>
      <Text>This is the chat </Text>
      <Text>ID: {chat.id}</Text>
      <Text>Name: {chat.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  title2: {
    fontSize: 34,
    marginBottom: 20,
  },
});

export default ChatDetailScreen;
