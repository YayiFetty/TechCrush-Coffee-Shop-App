import { Pressable } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../theme/colors";
import { fontSize, radius } from "../theme/typography";

export default function ToggleRow({ options, value, onChange }) {
  return (
    <View style={styles.container}>
      {options.map((item) => {
        const active = value === item.value;

        return (
          <Pressable
            key={item.value}
            style={[styles.button, active && styles.buttonActive]}
            onPress={() => onChange(item.value)}
          >
            <Text style={[styles.text, active && styles.textActive]}>
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLORS.background.primary,
    paddingVertical: 2,
    borderRadius: radius.r2,
    gap: 14,
  },

  button: {
    flex: 1,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: radius.r2,
  },

  buttonActive: {
    backgroundColor: COLORS.brand.primary,
  },

  text: {
    color: COLORS.title.title2,
    fontSize: fontSize.md,
  },

  textActive: {
    color: COLORS.text.white,
    fontWeight: "600",
  },
});
