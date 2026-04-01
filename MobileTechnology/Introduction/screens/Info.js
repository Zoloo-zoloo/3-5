import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function Info() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "profile", "Personal_info");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Firestore data:", docSnap.data());
          setData(docSnap.data());
        } else {
          console.log("Document does not exist");
        }
      } catch (err) {
        console.log("Firestore error:", err);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "white" }}>Loading data...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>My Personal Information</Text>

      {Object.entries(data).map(([key, value]) => (
        <View key={key} style={styles.card}>
          <Text style={styles.key}>{key}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 16,
  },
  center: {
    flex: 1,
    backgroundColor: "#0f172a",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    color: "#38bdf8",
    textAlign: "center",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#020617",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
  },
  key: {
    color: "#7dd3fc",
    fontSize: 16,
    fontWeight: "bold",
  },
  value: {
    color: "#e5e7eb",
    marginTop: 4,
  },
});