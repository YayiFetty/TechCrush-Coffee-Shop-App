import { Stack } from "expo-router";

export default function ShopLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="product/[id]" />
      <Stack.Screen name="order" />
      <Stack.Screen name="delivery" />
    </Stack>
  );
}
