import { Pressable, StyleSheet, Text } from "react-native";
import { COLORS } from "../theme/colors";
import { radius, textStyles } from "../theme/typography";

export function SecondaryBtn({ title, onPress }) {
  return (
    <Pressable style={styles.secBtn} onPress={onPress}>
      <Text style={styles.secBtnText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  secBtn: {
    height: 52,
    borderRadius: radius.r3,
    backgroundColor: COLORS.brand.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  secBtnText: {
    color: COLORS.text.white,
    ...textStyles.bodyMedium,
  },
});
