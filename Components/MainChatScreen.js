import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Import AntDesign icons from Expo

const MainChatScreen = ({ navigation }) => {
  const chats = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      lastMessage: "Hello",
      time: "10:00 AM",
      conversation: [
        {
          id: 1,
          sender: "John",
          message: "Hey, how are you?",
          isSender: false,
          time: "10:05 AM",
        },
        {
          id: 2,
          sender: "You",
          message: "I'm good, thanks!",
          isSender: true,
          time: "10:10 AM",
        },
        {
          id: 3,
          sender: "John",
          message: "Great to hear!",
          isSender: false,
          time: "10:15 AM",
        },
      ],
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      lastMessage: "How's it going?",
      time: "11:30 AM",
      conversation: [
        {
          id: 1,
          sender: "Jane",
          message: "Hey there!",
          isSender: false,
          time: "11:35 AM",
        },
        {
          id: 2,
          sender: "You",
          message: "Doing well, thanks!",
          isSender: true,
          time: "11:40 AM",
        },
        {
          id: 3,
          sender: "Jane",
          message: "Good to hear!",
          isSender: false,
          time: "11:45 AM",
        },
        {
          id: 4,
          sender: "Jane",
          message: "How's it going?",
          isSender: false,
          time: "11:50 AM",
        },
      ],
    },
    {
      id: 3,
      firstName: "Alice",
      lastName: "Johnson",
      lastMessage: "Good morning",
      time: "Yesterday",
      conversation: [
        {
          id: 1,
          sender: "Alice",
          message: "Good morning!",
          isSender: false,
          time: "9:00 AM",
        },
        {
          id: 2,
          sender: "You",
          message: "Morning!",
          isSender: true,
          time: "9:05 AM",
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.chatsContainer}>
        <Text style={styles.chatsTitle}>Chats</Text>
        {chats.map((chat) => (
          <TouchableOpacity
            key={chat.id}
            style={styles.chatItem}
            onPress={() => navigation.navigate("ChatDetail", { chat })}
          >
            <View style={styles.avatarContainer}>
              <Text
                style={[
                  styles.avatarText,
                  navigation.isFocused() && styles.activeNavItem,
                ]}
              >
                {chat.firstName[0].toUpperCase()}
                {chat.lastName[0].toUpperCase()}
              </Text>
            </View>
            <View style={styles.chatContent}>
              <Text style={styles.chatName}>
                {chat.firstName} {chat.lastName}
              </Text>
              <Text style={styles.lastMessage}>{chat.lastMessage}</Text>
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>{chat.time}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      {/* Bottom navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity
          style={[
            styles.navItem,
            navigation.isFocused() && styles.activeNavItem,
          ]}
        >
          <AntDesign
            name="inbox"
            size={24}
            color={navigation.isFocused() ? "#25D366" : "black"}
          />
          <Text>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navItem,
            navigation.isFocused() && styles.activeNavItem,
          ]}
        >
          <AntDesign
            name="contacts"
            size={24}
            color={navigation.isFocused() ? "#25D366" : "black"}
          />
          <Text>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navItem,
            navigation.isFocused() && styles.activeNavItem,
          ]}
        >
          <AntDesign
            name="monitor"
            size={24}
            color={navigation.isFocused() ? "#25D366" : "black"}
          />
          <Text>Monitoring</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navItem,
            navigation.isFocused() && styles.activeNavItem,
          ]}
        >
          <AntDesign
            name="message1"
            size={24}
            color={navigation.isFocused() ? "#25D366" : "black"}
          />
          <Text>Dm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navItem,
            navigation.isFocused() && styles.activeNavItem,
          ]}
          onPress={() => navigation.navigate("You")}
        >
          <AntDesign
            name="user"
            size={24}
            color={navigation.isFocused() ? "#25D366" : "black"}
          />
          <Text>You</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  chatsContainer: {
    flex: 1,
    padding: 20,
  },
  chatsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  chatContent: {
    flex: 1,
    justifyContent: "center",
  },
  chatName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  lastMessage: {
    color: "#666",
  },
  timeContainer: {
    justifyContent: "center",
  },
  timeText: {
    fontSize: 12,
    color: "#666",
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingVertical: 10,
  },
  navItem: {
    alignItems: "center",
  },
  activeNavItem: {
    color: "#25D366",
  },
});

export default MainChatScreen;
