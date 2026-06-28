import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { typography } from "../theme/typography";
import { COLORS } from "../theme/colors";
import PrimaryBtn from "../components/PrimaryBtn";
import { useState } from "react";
import { useRouter } from "expo-router";

const ImageOnb = require("../assets/image/onboarding.png");

export default function Onboarding() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleStarted = () => {
    if (clicked) return;
    setLoading(true);
    setClicked(true);

    setTimeout(() => {
      router.push("/(tabs)/home");
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Image source={ImageOnb} style={styles.imageOnb} />

      <View style={styles.darkOverlay} />

      <LinearGradient
        colors={["#000", "rgba(0,0,0,0.7)", "#000"]}
        locations={[0, 0.2, 1]}
        style={styles.gradientFade}
      />

      <View style={styles.textBox}>
        <View style={{ position: "absolute", top: -30, width: "100%" }}>
          <Text
            style={[
              typography.textStyles.xx1,
              {
                color: COLORS.title.title1,
                textAlign: "center",
                marginTop: -10,
                marginBottom: 20,
              },
            ]}
          >
            Fall in Love with {"\n"} Coffee in Blissful {"\n"} Delight!
          </Text>
          <Text
            style={[
              typography.textStyles.m3,
              { color: COLORS.title.title2, textAlign: "center" },
            ]}
          >
            Welcome to our cozy coffee corner, where {"\n"} every cup is a
            delightful for you.
          </Text>
        </View>

        <PrimaryBtn
          loading={loading}
          disabled={clicked}
          onPress={handleStarted}
          title="Get Started"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  imageOnb: {
    width: "100%",
    height: "60%",
  },
  darkOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0,0,0,0.1)",
    height: "60%",
  },
  gradientFade: {
    ...StyleSheet.absoluteFill,
    height: "30%",
    top: "70%",
  },

  textBox: {
    flex: 1,
    backgroundColor: "#000",
    width: "100%",
    height: "40%",

    justifyContent: "center",
    alignItems: "center",
  },
});
