import { Slot, Stack } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
Text
export default function Layout() {
  return (
    <SafeAreaView>
        <Text className="font-bold text-3xl">Hello</Text>
        <Slot/>
    </SafeAreaView>
  );
}
