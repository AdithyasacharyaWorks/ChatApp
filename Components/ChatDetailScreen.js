import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ChatDetailScreen = ({ route }) => {
  const { chat } = route.params;
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(chat.conversation || []);
  const scrollViewRef = useRef();

  useEffect(() => {
    // Scroll to bottom when messages change
    scrollViewRef.current.scrollToEnd({ animated: true });
  }, [messages]);

  const handleMessageSend = () => {
    if (message.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        sender: "You",
        message,
        isSender: true,
        time: getCurrentTime(),
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }`;
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.chatContainer}
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        {messages.map((msg) => (
          <View
            key={msg.id}
            style={[
              styles.messageContainer,
              msg.isSender
                ? styles.senderMessageContainer
                : styles.receiverMessageContainer,
            ]}
          >
            <View style={styles.messageContent}>
              <View>
                <Text
                  style={
                    msg.isSender ? styles.senderMessage : styles.receiverMessage
                  }
                >
                  {msg.message}
                </Text>
              </View>
              <View>
                <Text style={styles.timeText}>{msg.time}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={message}
          onChangeText={setMessage}
          multiline
          onFocus={() => scrollViewRef.current.scrollToEnd({ animated: true })}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleMessageSend}>
          <MaterialIcons name="send" size={24} color="#25D366" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    paddingTop: 10, // Add padding at the top
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  messageContainer: {
    marginBottom: 10,
    borderRadius: 10,
  },
  messageContent: {
    flexDirection: "col",
    justifyContent: "space-between",
    padding: 10,
  },
  senderMessageContainer: {
    alignSelf: "flex-end",
    backgroundColor: "#25D366",
    marginLeft: "auto", // Push message container to right side
  },
  receiverMessageContainer: {
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    marginRight: "auto", // Push message container to left side
  },
  senderMessage: {
    color: "#fff",
  },
  receiverMessage: {
    color: "#000",
  },
  timeText: {
    fontSize: 10,
    color: "#666",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#999",
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  sendButton: {
    padding: 10,
  },
});

export default ChatDetailScreen;
