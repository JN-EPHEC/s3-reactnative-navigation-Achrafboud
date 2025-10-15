import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function PostDetailScreen({ route }: any) {
  const params = route?.params ?? {};
  const title = params.title ?? "Post Detail";
  const content = params.content ?? "";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  title: {
    marginBottom: 12,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
});
