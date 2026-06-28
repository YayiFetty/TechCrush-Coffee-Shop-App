import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function NotificationCard() {
  return (
    <View style={styles.card}>
      <AntDesign name="tag" size={28} color="#FF3B30" />
      <View style={styles.textBox}>
        <Text style={styles.title}>Special Discount 💸</Text>
        <Text style={styles.subtitle}>
          Limited offer unlocked! Get 50% off your next coffee — because you
          deserve it ☕✨
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },

  textBox: {
    flex: 1,
  },

  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "#222",
  },

  subtitle: {
    fontSize: 13,
    color: "#666",
    marginTop: 4,
    lineHeight: 18,
  },
});
