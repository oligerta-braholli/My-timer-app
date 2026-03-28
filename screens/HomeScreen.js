// ...existing code...
import { Button, StyleSheet, Text, View } from "react-native";

import { useTimerContext } from "../context/TimerContext";
import useAsyncStorage from "../hooks/useAsyncStorage";

export default function HomeScreen({ navigation }) {
  const { time, start, stop, reset } = useTimerContext();
  const [logs, setLogs] = useAsyncStorage("logs", []);

  const save = () => {
    console.log("Save pressed, time:", time);
    setLogs([...logs, { id: Date.now(), time }]);
    stop();
    reset();
  };
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  const formattedTime = [hours, minutes, seconds]
    .map((v) => v.toString().padStart(2, "0"))
    .join(":");
  return (
    <View style={styles.container}>
      <Text style={styles.timerLabel}>Timer</Text>
      <View style={styles.timeRow}>
        <Text style={styles.timeHour}>{hours.toString().padStart(2, "0")}</Text>
        <Text style={styles.timeColon}>:</Text>
        <Text style={styles.timeMinute}>
          {minutes.toString().padStart(2, "0")}
        </Text>
        <Text style={styles.timeColon}>:</Text>
        <Text style={styles.timeSecond}>
          {seconds.toString().padStart(2, "0")}
        </Text>
      </View>

      <View style={styles.buttonRow}>
        <View style={styles.buttonWrapper}>
          <Button title="Start" onPress={start} color="#4CAF50" />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Stop" onPress={stop} color="#F44336" />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Save" onPress={save} color="#2196F3" />
        </View>
      </View>

      <View style={styles.logsButtonWrapper}>
        <Button
          title="Go to Logs"
          onPress={() => navigation.navigate("Logs")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 24,
  },
  timerLabel: {
    fontSize: 50,
    fontWeight: "800",
    color: "#3a2f32",
    marginBottom: 12,
    letterSpacing: 1,
    textAlign: "center",
  },
  timeRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
  },
  timeHour: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#222",
    backgroundColor: "#fff",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginHorizontal: 2,
    fontFamily: "monospace",
    elevation: 2,
  },
  timeMinute: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#222",
    backgroundColor: "#fff",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginHorizontal: 2,
    fontFamily: "monospace",
    elevation: 2,
  },
  timeSecond: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#222",
    backgroundColor: "#fff",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginHorizontal: 2,
    fontFamily: "monospace",
    elevation: 2,
  },
  timeColon: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#222",
    marginHorizontal: 1,
    fontFamily: "monospace",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 32,
  },
  buttonWrapper: {
    marginHorizontal: 8,
    minWidth: 90,
  },
  logsButtonWrapper: {
    marginTop: 12,
    width: "60%",
  },
});
