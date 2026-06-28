import {
  View,
  Text,
  Pressable,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import React from "react";
import { COLORS } from "@/theme/colors";
import { fontSize } from "@/theme/typography";
import { Entypo } from "@expo/vector-icons";

export default function PrimaryBtn({ title, onPress, disabled, loading }) {
  return (
    <Pressable
      onPress={onPress}
      style={[style.btnContainer, (disabled || loading) && style.disabledBtn]}
      disabled={disabled || loading}
    >
      <View style={{ flex: 1 }} />
      <View style={{ flex: 1 }}>
        {loading ? (
          <ActivityIndicator color="#fff" size="small" />
        ) : (
          <Text style={style.textBtn}>{title}</Text>
        )}
      </View>

      <View style={{ flex: 1 }}>
        <Entypo name="chevron-right" size={25} color="#fff" />
      </View>
    </Pressable>
  );
}

const style = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.brand.primary,
    width: "70%",
    height: 56,
    borderRadius: 50,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  disabledBtn: {
    opacity: 0.3,
  },
  textBtn: {
    color: "#fff",
    fontSize: fontSize.md,
  },
});
