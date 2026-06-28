import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

const BSafeAreaView = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "#F5F7FF",
  },
});

export default BSafeAreaView;
