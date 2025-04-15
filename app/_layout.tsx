import { Stack } from "expo-router";
import { Appearance } from "react-native";
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

export default function RootLayout() {
  Appearance.setColorScheme("light");

  return (
    <ActionSheetProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="create" options={{ headerShown: false }} />
        <Stack.Screen name="detail" options={{ headerShown: false }} />
        <Stack.Screen name="archive" options={{ headerShown: false }} />
      </Stack>
    </ActionSheetProvider>
  );
}
