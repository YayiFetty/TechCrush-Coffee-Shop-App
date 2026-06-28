import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../theme/colors";
import { fonts, fontSize, radius, textStyles } from "../../theme/typography";

export default function CoffeeCard({ product, onPress, onAdd }) {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.imageWrap}>
          <Image
            style={styles.image}
            source={product.image}
            contentFit="cover"
          />

          <View style={styles.starAbsolute}>
            <View style={styles.starBg}>
              <Ionicons name="star-sharp" size={18} color={COLORS.star} />
              <Text style={styles.rating}>{product.rating}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.titleSubContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.subtitle}>{product.subtitle}</Text>
      </View>

      <View style={styles.pricePlusContainer}>
        <Text style={styles.price}>${product.price}</Text>
        <TouchableOpacity onPress={onAdd} style={styles.plus}>
          <Ionicons name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 0,
    borderRadius: radius.r2,
    backgroundColor: COLORS.background.b1,
  },
  imageWrap: {
    position: "relative",
    marginBottom: 8,
  },
  image: {
    borderRadius: radius.r2,
    width: "100%",
    height: 150,
  },
  rating: {
    color: COLORS.text.white,
    fontSize: fontSize.md,
  },
  starAbsolute: {
    position: "absolute",

    top: 0,
    right: 0,
    gap: 6,
  },
  starBg: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    backgroundColor: "#000",
    borderTopRightRadius: radius.r2,
    borderTopLeftRadius: radius.r2,
    borderBottomLeftRadius: radius.r2,
  },
  titleSubContainer: { flexDirection: "column", gap: 5, marginVertical: 4 },
  title: {
    color: COLORS.text.t1,
    fontFamily: fonts.semiBold,
    fontSize: fontSize.lg,
  },
  subtitle: {
    fontSize: fontSize.md,
    color: COLORS.title.title2,
  },
  price: {
    color: COLORS.text.t1,
    fontFamily: fonts.semiBold,
    fontSize: fontSize.lg,
  },
  pricePlusContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  plus: {
    borderRadius: 10,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.brand.primary,
  },
});
