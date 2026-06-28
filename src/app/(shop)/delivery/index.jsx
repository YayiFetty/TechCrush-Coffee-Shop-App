import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";

import { COLORS } from "../../../theme/colors";
import { fonts, fontSize, spacing, radius } from "../../../theme/typography";
import { Image } from "expo-image";

const mapImage = require("../../../assets/image/map.png");
const courierImg = require("../../../assets/image/courier.png");
export default function DeliveryScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* MAP PLACEHOLDER (replace later with react-native-maps) */}
      <View style={styles.mapPlaceholder}>
        <Image
          source={mapImage}
          style={{ width: "100%", height: "100%" }}
          contentFit="cover"
        />
      </View>

      {/* HEADER OVERLAY */}
      <SafeAreaView style={styles.headerOverlay} edges={["top"]}>
        <Pressable onPress={() => router.back()} style={styles.iconBtn}>
          <Ionicons name="chevron-back" size={20} color={COLORS.text.primary} />
        </Pressable>

        <Pressable style={styles.iconBtn}>
          <MaterialIcons
            name="my-location"
            size={20}
            color={COLORS.text.primary}
          />
        </Pressable>
      </SafeAreaView>

      {/* BOTTOM SHEET */}
      <SafeAreaView style={styles.sheet} edges={["bottom"]}>
        <Text style={styles.etaTitle}>10 minutes left</Text>

        <Text style={styles.etaSubtitle}>Delivered to: Jl. Kpg Sutoyo</Text>

        {/* PROGRESS */}
        <View style={styles.progressBar}>
          <View style={styles.progressDone} />
          <View style={styles.progressActive} />
          <View style={styles.progressPending} />
        </View>

        {/* STATUS */}
        <View style={styles.statusBlock}>
          <View style={styles.superiorityIcon}>
            <Ionicons name="bicycle-outline" size={20} color="#C67C4E" />
          </View>
          <View>
            <Text style={styles.statusTitle}>Delivering your order</Text>
            <Text style={styles.statusText}>
              We will deliver your goods as fast as possible.
            </Text>
          </View>
        </View>

        {/* COURIER */}
        <View style={styles.courierRow}>
          <View style={styles.avatarPlaceholder}>
            <Image
              source={courierImg}
              style={{ width: "100%", height: "100%", borderRadius: radius.r3 }}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.courierName}>Brooklyn Simmons</Text>
            <Text style={styles.courierRole}>Personal Courier</Text>
          </View>

          <Pressable style={styles.callBtn}>
            <Feather name="phone" size={18} color={COLORS.text.white} />
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.primary,
  },

  mapPlaceholder: {
    height: "55%",
    backgroundColor: "#D9D9D9",
  },

  headerOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
  },

  iconBtn: {
    width: 42,
    height: 42,
    borderRadius: radius.r4,
    backgroundColor: COLORS.background.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  sheet: {
    flex: 1,
    backgroundColor: COLORS.text.white,
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    marginTop: -24,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },

  etaTitle: {
    fontFamily: fonts.semiBold,
    fontSize: fontSize.lg,
    color: COLORS.text.primary,
    textAlign: "center",
  },

  etaSubtitle: {
    fontFamily: fonts.regular,
    fontSize: fontSize.xs,
    color: COLORS.title.title2,
    textAlign: "center",
    marginTop: 4,
  },
  superiorityIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "rgba(237,237,237,0.35)",
    justifyContent: "center",
    alignItems: "center",
  },

  progressBar: {
    flexDirection: "row",
    gap: 4,
    marginTop: spacing.lg,
    height: 4,
  },

  progressDone: {
    flex: 1,
    backgroundColor: COLORS.brand.primary,
    borderRadius: 2,
  },

  progressActive: {
    flex: 1,
    backgroundColor: COLORS.brand.primary,
    borderRadius: 2,
  },

  progressPending: {
    flex: 1,
    backgroundColor: COLORS.background.primary,
    borderRadius: 2,
  },

  statusBlock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 22,
    marginTop: spacing.md,
    borderWidth: 1,
    borderColor: COLORS.text.grey,
    borderRadius: radius.r2,
    padding: 10,
  },

  statusTitle: {
    fontFamily: fonts.semiBold,
    fontSize: fontSize.sm,
    color: COLORS.text.primary,
  },

  statusText: {
    fontFamily: fonts.regular,
    fontSize: fontSize.xs,
    color: COLORS.title.title2,
    marginTop: 2,
  },

  courierRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    marginTop: spacing.lg,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: COLORS.background.primary,
  },

  avatarPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: radius.r3,
    backgroundColor: COLORS.background.primary,
  },

  courierName: {
    fontFamily: fonts.semiBold,
    fontSize: fontSize.sm,
    color: COLORS.text.primary,
  },

  courierRole: {
    fontFamily: fonts.regular,
    fontSize: fontSize.xs,
    color: COLORS.title.title2,
  },

  callBtn: {
    width: 40,
    height: 40,
    borderRadius: radius.pill,
    backgroundColor: COLORS.brand.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});
