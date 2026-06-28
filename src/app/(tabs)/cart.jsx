import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BSafeAreaView from "../../components/SafeAreaView";
import { Ionicons } from "@expo/vector-icons";

export default function Cart() {
  return (
    <BSafeAreaView>
      <View style={styles.container}>
        <View style={styles.card}>
          <Ionicons name="cart-outline" size={90} color="#C67C4E" />

          <Text style={styles.title}>Your cart is empty 🛒☕</Text>

          <Text style={styles.subtitle}>
            Looks like you’re trying to save money…{"\n"}
            Respect. But coffee is still waiting for you 😭
          </Text>

          <View style={styles.hintBox}>
            <Text style={styles.hintText}>
              💡 Tip: Go pick a coffee → tap “Add to Cart” → make future-you
              happy
            </Text>
          </View>
        </View>
      </View>
    </BSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  card: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 15,
    color: "#222",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 10,
    textAlign: "center",
    lineHeight: 20,
  },

  hintBox: {
    marginTop: 20,
    backgroundColor: "#F8F8F8",
    padding: 12,
    borderRadius: 12,
  },

  hintText: {
    fontSize: 12,
    color: "#444",
    textAlign: "center",
  },
});
