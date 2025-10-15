import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const posts = [
  {
    postId: "1",
    title: "React Native is Awesome",
    content: "React Native lets you build mobile apps using only JavaScript.",
  },
  {
    postId: "2",
    title: "State Management Tips",
    content: "Use Context API or Redux for scalable state management.",
  },
  {
    postId: "3",
    title: "UI Design Principles",
    content: "Consistency and simplicity are key to great UI design.",
  },
];

type NavigationProp = any;

export default function PostListScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Blog Posts</Text>
      {posts.map((post) => (
        <View key={post.postId} style={styles.postItem}>
          <Button
            title={post.title}
            onPress={() =>
              navigation.navigate("PostDetail", {
                postId: post.postId,
                title: post.title,
                content: post.content,
              })
            }
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  postItem: { marginBottom: 15 },
});
