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
        {
          id: 4,
          sender: "John",
          message: "How's your day going?",
          isSender: false,
          time: "10:20 AM",
        },
        {
          id: 5,
          sender: "You",
          message: "It's going well, thanks!",
          isSender: true,
          time: "10:25 AM",
        },
        {
          id: 6,
          sender: "John",
          message: "Any plans for the weekend?",
          isSender: false,
          time: "10:30 AM",
        },
        {
          id: 7,
          sender: "You",
          message: "Not yet, but I'm thinking of going hiking.",
          isSender: true,
          time: "10:35 AM",
        },
        {
          id: 8,
          sender: "John",
          message: "That sounds like fun!",
          isSender: false,
          time: "10:40 AM",
        },
        {
          id: 9,
          sender: "John",
          message: "Do you have any favorite hiking spots?",
          isSender: false,
          time: "10:45 AM",
        },
        {
          id: 10,
          sender: "You",
          message: "Yes, there's a trail near the mountains that I like.",
          isSender: true,
          time: "10:50 AM",
        },
        {
          id: 11,
          sender: "John",
          message: "Nice! How far is it from here?",
          isSender: false,
          time: "10:55 AM",
        },
        {
          id: 12,
          sender: "You",
          message: "It's about an hour's drive.",
          isSender: true,
          time: "11:00 AM",
        },
        {
          id: 13,
          sender: "John",
          message: "That's not too bad.",
          isSender: false,
          time: "11:05 AM",
        },
        {
          id: 14,
          sender: "John",
          message: "I'll have to check it out sometime.",
          isSender: false,
          time: "11:10 AM",
        },
        {
          id: 15,
          sender: "You",
          message: "Let me know if you want to join me!",
          isSender: true,
          time: "11:15 AM",
        },
        {
          id: 16,
          sender: "John",
          message: "Sure, I'd love to!",
          isSender: false,
          time: "11:20 AM",
        },
        {
          id: 17,
          sender: "John",
          message: "When were you thinking of going?",
          isSender: false,
          time: "11:25 AM",
        },
        {
          id: 18,
          sender: "You",
          message: "How about next Saturday?",
          isSender: true,
          time: "11:30 AM",
        },
        {
          id: 19,
          sender: "John",
          message: "Sounds good to me.",
          isSender: false,
          time: "11:35 AM",
        },
        {
          id: 20,
          sender: "John",
          message: "I'll make sure to clear my schedule.",
          isSender: false,
          time: "11:40 AM",
        },
        {
          id: 21,
          sender: "You",
          message: "Great! It's going to be a fun trip.",
          isSender: true,
          time: "11:45 AM",
        },
        {
          id: 22,
          sender: "John",
          message: "Absolutely!",
          isSender: false,
          time: "11:50 AM",
        },
        {
          id: 23,
          sender: "John",
          message: "I can't wait.",
          isSender: false,
          time: "11:55 AM",
        },
        {
          id: 24,
          sender: "You",
          message: "Me neither!",
          isSender: true,
          time: "12:00 PM",
        },
        {
          id: 25,
          sender: "John",
          message: "By the way, have you tried that new restaurant downtown?",
          isSender: false,
          time: "12:05 PM",
        },
        {
          id: 26,
          sender: "You",
          message: "Not yet, but I've heard good things about it.",
          isSender: true,
          time: "12:10 PM",
        },
        {
          id: 27,
          sender: "John",
          message: "We should check it out sometime.",
          isSender: false,
          time: "12:15 PM",
        },
        {
          id: 28,
          sender: "John",
          message: "Their pasta dishes are supposed to be amazing.",
          isSender: false,
          time: "12:20 PM",
        },
        {
          id: 29,
          sender: "You",
          message: "I'm definitely up for that!",
          isSender: true,
          time: "12:25 PM",
        },
        {
          id: 30,
          sender: "John",
          message: "Let's plan it for next week.",
          isSender: false,
          time: "12:30 PM",
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
