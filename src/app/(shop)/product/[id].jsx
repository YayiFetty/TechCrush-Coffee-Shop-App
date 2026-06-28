import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter, Stack } from "expo-router";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import { products } from "../../../data/coffeeData";
import { fonts } from "../../../theme/typography";
import { COLORS } from "../../../theme/colors";

const SIZES = ["S", "M", "L"];

export default function DetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const [activeSize, setActiveSize] = useState(1);
  const [favorite, setFavorite] = useState(false);

  const product = products.find((p) => String(p.id) === id);

  if (!product) return null;

  const handleBuyNow = () => {
    router.push({
      pathname: "/order",
      params: {
        id: product.id,
        size: activeSize,
      },
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.header}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#2A2A2A" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Details</Text>

        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => setFavorite((prev) => !prev)}
        >
          <Ionicons
            name={favorite ? "heart" : "heart-outline"}
            size={24}
            color={favorite ? COLORS.brand.primary : "#2A2A2A"}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Image source={product.image} style={styles.image} resizeMode="cover" />

        <View style={styles.detailProduct}>
          <View style={styles.titleRow}>
            <View style={styles.textGroup}>
              <Text style={styles.title}>{product.title}</Text>
              <Text style={styles.subtitle}>{product.subtitle}</Text>
            </View>
            <View style={styles.superiority}>
              <View style={styles.superiorityIcon}>
                <Ionicons name="bicycle-outline" size={20} color="#C67C4E" />
              </View>

              <View style={styles.superiorityIcon}>
                <Ionicons name="cafe-outline" size={20} color="#C67C4E" />
              </View>

              <View style={styles.superiorityIcon}>
                <Ionicons name="water-outline" size={20} color="#C67C4E" />
              </View>
            </View>
          </View>
          <View style={styles.rating}>
            <Ionicons name="star" size={20} color="#FBBE21" />
            <Text style={styles.ratingValue}>
              {product.rating} ({product.reviews})
            </Text>
          </View>
        </View>

        <View style={styles.line} />

        <View style={styles.description}>
          <Text style={styles.sectionLabel}>Description</Text>

          <Text style={styles.descriptionText} numberOfLines={3}>
            {product.description}
            <Text style={styles.readMore}> Read More</Text>
          </Text>
        </View>

        <View style={styles.sizeBlock}>
          <Text style={styles.sectionLabel}>Size</Text>

          <View style={styles.sizeRow}>
            {SIZES.map((size, index) => {
              const active = index === activeSize;

              return (
                <TouchableOpacity
                  key={size}
                  onPress={() => setActiveSize(index)}
                  style={[styles.sizeBtn, active && styles.sizeBtnActive]}
                >
                  <Text
                    style={[styles.sizeText, active && styles.sizeTextActive]}
                  >
                    {size}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <View style={styles.priceBlock}>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.priceValue}>$ {product.price.toFixed(2)}</Text>
        </View>

        <TouchableOpacity style={styles.buyBtn} onPress={handleBuyNow}>
          <Text style={styles.buyBtnText}>Buy Now</Text>
        </TouchableOpacity>
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
    paddingHorizontal: 24,
    paddingBottom: 140,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 12,
  },

  iconBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
    color: "#242424",
  },

  image: {
    width: "100%",
    height: 350,
    borderRadius: 16,
    marginTop: 12,
  },

  detailProduct: {
    width: "100%",
    marginTop: 24,
    gap: 16,
  },

  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  textGroup: {
    gap: 4,
    flex: 1,
  },

  title: {
    fontFamily: fonts.semiBold,
    fontSize: 20,
    lineHeight: 30,
    color: "#242424",
  },

  subtitle: {
    fontFamily: fonts.regular,
    fontSize: 12,
    lineHeight: 14,
    color: "#A2A2A2",
  },

  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  ratingValue: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
    color: "#2A2A2A",
  },

  superiority: {
    flexDirection: "row",
    gap: 12,
  },

  superiorityIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "rgba(237,237,237,0.35)",
    justifyContent: "center",
    alignItems: "center",
  },

  line: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#E3E3E3",
    marginTop: 16,
  },

  description: {
    width: "100%",
    marginTop: 16,
    gap: 8,
  },

  sectionLabel: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
    lineHeight: 24,
    color: "#242424",
  },

  descriptionText: {
    fontFamily: fonts.regular,
    fontSize: 14,
    lineHeight: 21,
    color: "#A2A2A2",
  },

  readMore: {
    color: "#C67C4E",
    fontFamily: fonts.medium,
  },

  sizeBlock: {
    width: "100%",
    marginTop: 24,
    gap: 16,
  },

  sizeRow: {
    flexDirection: "row",
    gap: 12,
  },

  sizeBtn: {
    flex: 1,
    height: 41,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E3E3E3",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  sizeBtnActive: {
    backgroundColor: "#F9F2ED",
    borderColor: "#C67C4E",
  },

  sizeText: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: "#242424",
  },

  sizeTextActive: {
    color: "#C67C4E",
  },

  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 66,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  priceBlock: {
    marginRight: 20,
  },

  priceLabel: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: "#909090",
  },

  priceValue: {
    fontFamily: fonts.semiBold,
    fontSize: 18,
    color: "#C67C4E",
  },

  buyBtn: {
    flex: 1,
    height: 56,
    borderRadius: 16,
    backgroundColor: "#C67C4E",
    justifyContent: "center",
    alignItems: "center",
  },

  buyBtnText: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
    color: "#FFFFFF",
  },
});
