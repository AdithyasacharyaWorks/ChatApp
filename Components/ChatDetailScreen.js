import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Linking,
  Platform,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import * as IntentLauncher from "expo-intent-launcher";

const ChatDetailScreen = ({ route }) => {
  const { chat } = route.params;
  const [message, setMessage] = useState("");
  const [freezeMessage, setFreezeMessage] = useState(false);
  const [messages, setMessages] = useState(chat.conversation || []);
  const [selectedFile, setSelectedFile] = useState(null);
  const scrollViewRef = useRef();

  useEffect(() => {
    // Scroll to bottom when messages change
    scrollViewRef.current.scrollToEnd({ animated: true });
  }, [messages]);

  const handleMessageSend = () => {
    if (freezeMessage) {
      setFreezeMessage(false);
    }
    if (message.trim() !== "" || selectedFile) {
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
        console.log(newMessage);
      }
      if (selectedFile) {
        console.log("here inside selected file ");
        const newMessage = {
          id: messages.length + 1,
          sender: "You",
          message: `Document: ${selectedFile?.name}`,
          fileURI: selectedFile?.uri, // Add file URI to message
          isSender: true,
          time: getCurrentTime(),
        };

        setMessages([...messages, newMessage]);
        setSelectedFile(null);
        console.log(newMessage);
      }
    }
  };
  const handleDocumentUpload = async () => {
    console.log("here inside the handleDocument");
    try {
      const document = await DocumentPicker.getDocumentAsync({
        type: "application/pdf", // Specify the type of document you want to allow
      });

      if (document.assets && document.assets.length > 0 && !document.canceled) {
        // Move the document to the app's document directory
        const asset = document.assets[0];
        const newPath = `${FileSystem.documentDirectory}${asset.name}`;
        await FileSystem.moveAsync({
          from: asset.uri,
          to: newPath,
        });
        setSelectedFile({ ...asset, uri: newPath });
        console.log("Selected file:", asset);
        setMessage(document?.assets[0]?.name);
        setFreezeMessage(true);
      } else {
        console.warn("Invalid document object:", document);
      }
    } catch (error) {
      console.error("Error picking document: ", error);
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

  const handleFileClick = async (fileURI) => {
    try {
      let localUri;
      if (Platform.OS === "android") {
        const fileParts = fileURI.split("/");
        const fileName = fileParts[fileParts.length - 1];
        localUri = `${FileSystem.cacheDirectory}${fileName}`;
        await FileSystem.copyAsync({ from: fileURI, to: localUri });
      } else {
        localUri = fileURI;
      }
      await FileSystem.getContentUriAsync(localUri)
        .then((contentUri) => {
          console.log("Content URI:", contentUri);
          IntentLauncher.startActivityAsync("android.intent.action.VIEW", {
            data: contentUri,
            flags: 1, // FLAG_GRANT_READ_URI_PERMISSION
            type: "application/pdf",
          });
        })
        .catch((error) => {
          console.error("Error opening file:", error);
        });
    } catch (error) {
      console.error("Error handling file click:", error);
    }
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
              {msg.fileURI ? (
                <TouchableOpacity onPress={() => handleFileClick(msg.fileURI)}>
                  <Text style={styles.fileLink}>{msg.message}</Text>
                </TouchableOpacity>
              ) : (
                <Text
                  style={
                    msg.isSender ? styles.senderMessage : styles.receiverMessage
                  }
                >
                  {msg.message}
                </Text>
              )}
              <Text style={styles.timeText}>{msg.time}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TouchableOpacity
          style={styles.attachmentButton}
          onPress={handleDocumentUpload}
        >
          <MaterialIcons name="attach-file" size={24} color="#666" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={message}
          onChangeText={!freezeMessage ? setMessage : ""}
          // onChangeText={setMessage}
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
  attachmentButton: {
    padding: 10,
  },
  fileLink: {
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default ChatDetailScreen;
