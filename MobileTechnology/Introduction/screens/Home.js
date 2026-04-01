import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Me</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Info")}
      >
        <Text style={styles.cardText}>Personal Info</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Skills")}
      >
        <Text style={styles.cardText}>Skills</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Hobbies")}
      >
        <Text style={styles.cardText}>Hobbies</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 22,
    color: "#38bdf8",
    textAlign: "center",
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#020617",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  cardText: {
    color: "#e5e7eb",
    fontSize: 16,
    textAlign: "center",
  },
});