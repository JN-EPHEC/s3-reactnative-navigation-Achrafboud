import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function WishlistScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Wishlist</Text>
      <Text>Your wishlist is empty.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 8 },
});
