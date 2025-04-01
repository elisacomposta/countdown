import { Stack } from "expo-router";
import { Appearance } from "react-native";

export default function RootLayout() {
  Appearance.setColorScheme("light");

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="create" options={{ headerShown: false }} />
    </Stack>
  );
}
