import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { COLORS } from "../../theme/colors";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { fonts, fontSize, radius, textStyles } from "../../theme/typography";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { categories } from "../../constants/category";
import CategoryScroll from "../../components/category/CategoryScroll";
import { useState } from "react";
import { products } from "../../data/coffeeData";
import CoffeeCard from "../../components/category/CoffeeCard";
import { useBottomTabBarHeight } from "expo-router/build/react-navigation/bottom-tabs";
import { router } from "expo-router";

const BannerImage = require("../../assets/image/Banner.png");
const courierImg = require("../../assets/image/courier.png");

export default function Home() {
  const tabBarHeight = useBottomTabBarHeight();
  const insets = useSafeAreaInsets();
  const [category, setCategory] = useState(categories[0].slug);

  const filteredProducts =
    category === categories[0].slug
      ? products
      : products.filter((item) => item.category === category);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.blackBox}>
          <View>
            {/* location and welcome name */}
            <View style={styles.welcomeBox}>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 20,
                }}
              >
                <Text style={styles.location}>Location</Text>

                <View style={[styles.welcomeName]}>
                  <Text style={[styles.subWelcomeName, textStyles.l2]}>
                    Bilzen, Tanjungbalai
                  </Text>
                  <TouchableOpacity>
                    <Feather name="chevron-down" size={24} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity style={styles.avatarPlaceholder}>
                <Image
                  source={courierImg}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: radius.r3,
                  }}
                />
              </TouchableOpacity>
            </View>

            {/* search box */}
            <View style={styles.searchBox}>
              <View style={styles.inputContainer}>
                <Ionicons name="search-outline" size={24} color="#fff" />

                <TextInput
                  style={styles.inputText}
                  placeholder="Search caffe"
                  placeholderTextColor="#fff"
                />
              </View>

              {/* filter */}
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityLabel="Filter Search"
                style={styles.iconContainer}
              >
                <MaterialCommunityIcons
                  name="tune-variant"
                  size={24}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* banner image */}
          <View style={styles.bannerContainer}>
            <Image
              source={BannerImage}
              style={styles.bannerImg}
              contentFit="cover"
            />
            <View style={styles.bannerText}>
              <View>
                <TouchableOpacity style={styles.promoBtn}>
                  <Text style={styles.promoBtnText}>Promo</Text>
                </TouchableOpacity>

                <LinearGradient
                  colors={["#111111", "#313131"]}
                  style={{ width: 190, top: 25, height: 25 }}
                />
              </View>

              <View
                style={{
                  justifyContent: "flex-start",
                  gap: 20,
                  marginTop: -10,
                }}
              >
                <Text style={styles.buyOneText}>Buy One get</Text>
                <Text style={styles.buyOneText}> one Free</Text>
                <LinearGradient
                  colors={["#111111", "#313131"]}
                  style={{ width: 190, top: -33, height: 25 }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* scrollview */}

      <View style={{ flex: 1, marginTop: 75, paddingHorizontal: 30 }}>
        <ScrollView
          horizontal
          contentContainerStyle={{
            alignItems: "center",
          }}
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((item) => (
            <CategoryScroll
              key={item.slug}
              title={item.title}
              active={category === item.slug}
              onPress={() => setCategory(item.slug)}
            />
          ))}
        </ScrollView>

        {/* category card */}

        <FlatList
          data={filteredProducts}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CoffeeCard
              product={item}
              onAdd={() =>
                Alert.alert(
                  "Add to Cart",
                  `Do you want to add ${item.title}?`,
                  [
                    { text: "Cancel", style: "cancel" },
                    {
                      text: "Add",
                      onPress: () => console.log("added", item.id),
                    },
                  ],
                )
              }
              onPress={() =>
                router.push({
                  pathname: "/product/[id]",
                  params: {
                    id: item.id,
                  },
                })
              }
            />
          )}
          numColumns={2}
          columnWrapperStyle={{
            gap: 13,
            marginBottom: 16,
          }}
          contentContainerStyle={{
            paddingBottom: tabBarHeight + insets.bottom,
            paddingVertical: 14,
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.primary,
  },
  blackBox: {
    backgroundColor: "#000",
    width: "100%",
    minHeight: 350,
    height: 350,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  welcomeBox: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
  location: {
    color: COLORS.title.title2,
    fontSize: fontSize.xl,
  },
  welcomeName: {
    color: COLORS.title.title2,
    flexDirection: "row",
    gap: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  subWelcomeName: {
    color: COLORS.title.title1,
    fontSize: 40,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    justifyContent: "space-between",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 10,
    flex: 1,
    height: 56,
    borderRadius: 12,

    backgroundColor: COLORS.background.primary2,
  },
  inputText: {
    flex: 1,
    fontSize: fontSize.md,
    color: "#fff",
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: COLORS.brand.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  // banner
  bannerContainer: {
    marginTop: 50,
    position: "relative",
  },
  bannerImg: {
    height: 180,
    paddingHorizontal: 20,
    width: "100%",
    borderRadius: 30,
  },
  promoBtn: {
    width: 60,
    height: 30,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.promo,
  },
  promoBtnText: {
    color: "#fff",
    fontSize: 16,
  },
  buyOneText: {
    color: "#fff",
    fontSize: 42,
    fontFamily: fonts.semiBold,
    lineHeight: 33,
    zIndex: 999,
  },
  bannerText: {
    position: "absolute",
    top: 15,
    left: 20,
  },
  avatarPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: radius.r3,
    backgroundColor: COLORS.background.primary,
  },
});
