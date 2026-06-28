import { View, Text } from "react-native";
import React from "react";
import AppLayout from "../components/AppLayout";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <AppLayout>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(shop)" options={{ headerShown: false }} />
      </Stack>
    </AppLayout>
  );
}
