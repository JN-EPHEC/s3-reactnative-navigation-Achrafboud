
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CourseDetailScreen({ route }: any) {
  const params = route?.params ?? {};
  const courseId = params.courseId ?? "-";
  const title = params.title ?? "Course Details";
  const description = params.description ?? "No description provided.";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>Course ID: {courseId}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 8 },
  subtitle: { color: "#666", marginBottom: 12 },
  description: { fontSize: 16, lineHeight: 22 },
});
