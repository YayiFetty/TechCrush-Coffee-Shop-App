import { useLocalSearchParams, useRouter } from "expo-router";
import { products } from "../../../data/coffeeData";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";

import { COLORS } from "../../../theme/colors";
import {
  fonts,
  fontSize,
  radius,
  spacing,
  textStyles,
} from "../../../theme/typography";
import { SecondaryBtn } from "../../../components/SecondaryBtn";
import ToggleRow from "../../../components/ToggleRow";

const Options = [
  { label: "Deliver", value: "deliver" },
  { label: "Pick Up", value: "pickup" },
];

export default function OrderScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const product = products.find((p) => String(p.id) === id);

  if (!product) return null;

  const [mode, setMode] = useState("deliver");
  const [qty, setQty] = useState(1);
  const [discountApplied, setDiscountApplied] = useState(false);

  const discountRate = 0.1; // 10%
  const deliveryFee = 1.0;

  const subTotal = product.price * qty;
  const discount = discountApplied ? subTotal * discountRate : 0;
  const total = subTotal + deliveryFee - discount;

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        {/* HEADER */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.iconBtn}>
            <Entypo name="chevron-left" size={22} color={COLORS.text.primary} />
          </Pressable>

          <Text style={styles.headerTitle}>Order</Text>

          <View style={styles.iconBtn} />
        </View>

        {/* TOGGLE */}
        <ToggleRow options={Options} value={mode} onChange={setMode} />

        {/* ADDRESS */}
        <Text style={styles.delivery}>Delivery Address</Text>
        <Text style={styles.addressName}>Jl. Kpg Sutoyo</Text>
        <Text style={styles.addressDetail}>
          Kpg. Sutoyo No, 620, Bilzen, Tanjungbalai
        </Text>

        <View style={styles.addressActions}>
          <Pressable style={styles.pillBtn}>
            <FontAwesome name="edit" size={20} color="black" />
            <Text style={styles.pillBtnText}>Edit Address</Text>
          </Pressable>

          <Pressable style={styles.pillBtn}>
            <Octicons name="note" size={20} color="black" />
            <Text style={styles.pillBtnText}>Add Note</Text>
          </Pressable>
        </View>

        {/* LINE */}
        <View style={styles.line} />

        {/* ITEM */}
        <View style={styles.itemRow}>
          <Image source={product.image} style={styles.itemImage} />

          <View style={{ flex: 1 }}>
            <Text style={styles.itemName}>{product.title}</Text>
            <Text style={styles.itemSubtitle}>{product.subtitle}</Text>
          </View>

          {/* QTY */}
          <View style={styles.qtyRow}>
            <Pressable
              style={styles.qtyBtn}
              onPress={() => setQty(Math.max(1, qty - 1))}
            >
              <Entypo name="minus" size={14} color="#000" />
            </Pressable>

            <Text style={styles.qtyValue}>{qty}</Text>

            <Pressable style={styles.qtyBtn} onPress={() => setQty(qty + 1)}>
              <Entypo name="plus" size={14} color="#000" />
            </Pressable>
          </View>
        </View>

        {/* DISCOUNT */}
        <TouchableOpacity
          onPress={() => setDiscountApplied((prev) => !prev)}
          style={[
            styles.discountRow,
            discountApplied ? { opacity: 0.5 } : { opacity: 1 },
          ]}
        >
          <View style={styles.discountLeft}>
            <MaterialCommunityIcons
              name="brightness-percent"
              size={24}
              color={COLORS.brand.primary}
            />

            <Text style={styles.discountText}>
              {discountApplied ? "10%" : "0%"}
            </Text>

            <Text style={styles.discountText}>
              {discountApplied ? "Discount Applied" : "Tap to Apply Discount"}
            </Text>
          </View>

          <Entypo name="chevron-right" size={24} color="black" />
        </TouchableOpacity>

        {/* SUMMARY */}
        <Text style={styles.delivery}>Payment Summary</Text>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Price</Text>
          <Text style={styles.summaryValue}>${subTotal.toFixed(2)}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Discount</Text>
          <Text style={styles.summaryValue}>-${discount.toFixed(2)}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Delivery Fee</Text>
          <Text style={styles.summaryValue}>${deliveryFee.toFixed(2)}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Total</Text>
          <Text style={styles.summaryValue}>${total.toFixed(2)}</Text>
        </View>
      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 22,
            }}
          >
            <FontAwesome5
              name="wallet"
              size={24}
              color={COLORS.brand.primary}
            />
            <View style={styles.cashContainer}>
              <Text style={styles.cash}>Cash/Wallet</Text>
              <Text
                style={{
                  fontSize: fontSize.xl,
                  fontWeight: "800",
                  textAlign: "left",
                  color: COLORS.brand.primary,
                }}
              >
                ${total.toFixed(2)}
              </Text>
            </View>
          </View>

          <Entypo name="chevron-right" size={24} color="black" />
        </TouchableOpacity>
        <SecondaryBtn
          title={`Order • $${total.toFixed(2)}`}
          onPress={() => router.push("/delivery")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.b1,
  },

  content: {
    paddingHorizontal: spacing.lg,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: spacing.md,
  },

  headerTitle: {
    ...textStyles.m3,
    color: COLORS.text.primary,
  },

  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: radius.r3,
    justifyContent: "center",
    alignItems: "center",
  },
  delivery: {
    fontSize: fontSize.xl,
    fontFamily: fonts.semiBold,
    color: COLORS.t1,
    marginVertical: spacing.xs,
  },
  addressName: {
    fontSize: fontSize.md,
    fontFamily: fonts.semiBold,
    color: COLORS.t1,
  },
  addressDetail: {
    fontFamily: fonts.regular,
    fontSize: fontSize.sm,
    color: COLORS.title.title2,
    marginTop: 2,
  },
  addressActions: {
    flexDirection: "row",
    gap: spacing.sm,
    marginTop: spacing.sm,
  },
  pillBtn: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xxs,
    borderRadius: radius.r4,
    borderWidth: 1,
    borderColor: COLORS.border.b,
  },
  pillBtnText: {
    fontFamily: fonts.medium,
    fontSize: fontSize.xs,
    color: COLORS.text.t1,
  },
  line: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.border.b,
    marginVertical: 16,
  },

  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },

  itemImage: {
    width: 70,
    height: 70,
    borderRadius: radius.sm,
  },

  itemName: {
    fontSize: fontSize.xl,
    fontFamily: fonts.semiBold,
    color: COLORS.text.primary,
  },

  itemSubtitle: {
    fontSize: fontSize.sm,
    fontFamily: fonts.semiBold,
    color: COLORS.text.grey,
  },

  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },

  qtyBtn: {
    width: 30,
    height: 30,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: COLORS.background.primary,
    borderRadius: radius.r4,
    backgroundColor: COLORS.background.b1,
    justifyContent: "center",
    alignItems: "center",
  },

  qtyBtnActive: {
    backgroundColor: COLORS.brand.primary,
  },

  qtyValue: {
    ...textStyles.bodyMedium,
    marginHorizontal: 6,
  },

  discountRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: spacing.xs,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: COLORS.brand.primary,
    borderRadius: 10,
  },

  discountLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  discountText: {
    fontFamily: fonts.semiBold,
    fontSize: fontSize.md,
    color: COLORS.text.t1,
  },

  sectionTitle: {
    ...textStyles.bodyMedium,
    marginTop: spacing.md,
    marginBottom: spacing.xs,
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },

  summaryLabel: {
    fontSize: fontSize.md,
    fontFamily: fonts.semiBold,
    color: COLORS.t1,
  },

  summaryValue: {
    ...textStyles.bodyMedium,
    color: COLORS.text.primary,
  },

  footer: {
    padding: spacing.lg,

    backgroundColor: COLORS.background.b1,
  },
  cashContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: 10,
  },

  cash: {
    fontSize: fontSize.xl,
    fontFamily: fonts.semiBold,
    color: COLORS.t1,
    lineHeight: 50,
  },
});
