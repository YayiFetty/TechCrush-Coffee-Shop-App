import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BSafeAreaView from "../../components/SafeAreaView";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

export default function Favorite() {
  return (
    <BSafeAreaView>
      <View style={styles.container}>
        <View style={styles.card}>
          <FontAwesome5 name="heart-broken" size={90} color="red" />

          <Text style={styles.title}>No favorites yet ☕💔</Text>

          <Text style={styles.subtitle}>
            Your coffee is feeling emotionally unavailable right now.{"\n"}
            Go tap the heart in a product screen before it starts questioning
            itself.
          </Text>

          <View style={styles.hintBox}>
            <Text style={styles.hintText}>
              💡 Hint: Open a coffee → tap ❤️ → come back here like a proud
              collector
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
