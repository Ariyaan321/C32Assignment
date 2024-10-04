import { Stack } from 'expo-router';


// http://localhost:8081/index?name=Rushabh&class=DT-301&time=1pm
export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="/home" />
        <Stack.Screen name="/details" />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
  );
}
