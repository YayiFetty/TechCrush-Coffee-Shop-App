import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import BSafeAreaView from "../../components/SafeAreaView";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { fonts } from "../../theme/typography";
import { router } from "expo-router";

export default function Notifications() {
  return (
    <BSafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#2A2A2A" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Notifications</Text>

        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="notifications-sharp" size={24} color="red" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {/* 1. Order Confirmed */}
        <View style={styles.card}>
          <Ionicons name="checkmark-circle" size={28} color="#4CAF50" />
          <View style={styles.textBox}>
            <Text style={styles.title}>Order Confirmed 🎉</Text>
            <Text style={styles.subtitle}>
              Your order #112 has been confirmed and is being prepared with love
              ☕
            </Text>
          </View>
        </View>

        {/* 2. Shipped */}
        <View style={styles.card}>
          <MaterialIcons name="local-shipping" size={28} color="#C67C4E" />
          <View style={styles.textBox}>
            <Text style={styles.title}>Order Shipped 🚚</Text>
            <Text style={styles.subtitle}>
              Good news! Your coffee is on the move. Don’t blink or you might
              miss it.
            </Text>
          </View>
        </View>

        {/* 3. Discount */}
        <View style={styles.card}>
          <AntDesign name="tag" size={28} color="#FF3B30" />
          <View style={styles.textBox}>
            <Text style={styles.title}>Special Discount 💸</Text>
            <Text style={styles.subtitle}>
              Limited offer unlocked! Get 20% off your next coffee — because you
              deserve it ☕✨
            </Text>
          </View>
        </View>

        {/* 4. New Feature */}
        <View style={styles.card}>
          <Ionicons name="sparkles" size={28} color="#6C63FF" />
          <View style={styles.textBox}>
            <Text style={styles.title}>New Feature 🚀</Text>
            <Text style={styles.subtitle}>
              We added something fresh! Check out new coffee recommendations
              tailored just for you.
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <Ionicons name="sparkles" size={28} color="#6C63FF" />
          <View style={styles.textBox}>
            <Text style={styles.title}>New Feature 🚀</Text>
            <Text style={styles.subtitle}>
              We added something fresh! Check out new coffee recommendations
              tailored just for you.
            </Text>
          </View>
        </View>

        {/* 3. Discount */}
        <View style={styles.card}>
          <AntDesign name="tag" size={28} color="#FF3B30" />
          <View style={styles.textBox}>
            <Text style={styles.title}>Special Discount 💸</Text>
            <Text style={styles.subtitle}>
              Limited offer unlocked! Get 20% off your next coffee — because you
              deserve it ☕✨
            </Text>
          </View>
        </View>
        {/* 3. Discount */}
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
        {/* 3. Discount */}
        <View style={styles.card}>
          <AntDesign name="tag" size={28} color="#FF3B30" />
          <View style={styles.textBox}>
            <Text style={styles.title}>Special Discount 💸</Text>
            <Text style={styles.subtitle}>
              Limited offer unlocked! Get 30% off your next coffee — because you
              deserve it ☕✨
            </Text>
          </View>
        </View>

        {/* 4. New Feature */}
        <View style={styles.card}>
          <Ionicons name="sparkles" size={28} color="#6C63FF" />
          <View style={styles.textBox}>
            <Text style={styles.title}>New Feature 🚀</Text>
            <Text style={styles.subtitle}>
              We added something fresh! Check out new coffee recommendations
              tailored just for you.
            </Text>
          </View>
        </View>
      </ScrollView>
    </BSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 15,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
    color: "#242424",
  },
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
