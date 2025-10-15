import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Achraf Boud</Text>
      <Text style={styles.email}>achraf@example.com</Text>
      <Text style={styles.bio}>Student • Mobile Developer • Course enthusiast</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 16 },
  name: { fontSize: 22, fontWeight: "bold" },
  email: { color: "#666", marginTop: 6 },
  bio: { marginTop: 12, textAlign: "center" },
});
