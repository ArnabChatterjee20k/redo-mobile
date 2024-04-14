import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function index() {
  return (
    <View className="bg-red-500">
      <Link className="text-red-300 font-bold" href="/users/1">User 1</Link>
    </View>
  );
}
