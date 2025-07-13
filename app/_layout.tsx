import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
  <>
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
    </Stack>
    <StatusBar style="light"/>
  </>
  );
}

//A stack navigator is the foundation for navigating between different screens in an app. On Android, a stacked route animates on top of the current screen. On iOS, a stacked route animates from the right. Expo Router provides a Stack component to create a navigation stack to add new routes.