import { FlatList, Text, View } from "react-native";
import useAsyncStorage from "../hooks/useAsyncStorage";

export default function LogScreen() {
  const [logs] = useAsyncStorage("logs", []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={logs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const hours = Math.floor(item.time / 3600);
          const minutes = Math.floor((item.time % 3600) / 60);
          const seconds = item.time % 60;
          const formatted = [hours, minutes, seconds]
            .map((v) => v.toString().padStart(2, "0"))
            .join(":");
          return <Text>Session: {formatted}</Text>;
        }}
      />
    </View>
  );
}
