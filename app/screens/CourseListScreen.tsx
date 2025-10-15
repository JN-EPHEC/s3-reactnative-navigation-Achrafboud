import React from "react";
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

type Course = { id: string; title: string; description: string };

const courses: Course[] = [
  { id: "c1", title: "Intro to React Native", description: "Learn the basics of React Native." },
  { id: "c2", title: "Advanced JavaScript", description: "Deep dive into JS concepts and patterns." },
  { id: "c3", title: "UI/UX for Developers", description: "Design practical and usable interfaces." },
];

type NavigationProp = NativeStackNavigationProp<any>;

export default function CourseListScreen() {
  const navigation = useNavigation<NavigationProp>();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => (navigation as any).getParent()?.openDrawer()} style={{ paddingLeft: 12 }}>
          <Ionicons name="menu" size={24} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>All Courses</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Button
              title={item.title}
              onPress={() =>
                navigation.navigate("CourseDetail", {
                  courseId: item.id,
                  title: item.title,
                  description: item.description,
                })
              }
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  item: { marginBottom: 12 },
});
