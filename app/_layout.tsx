import "react-native-gesture-handler";
import "react-native-reanimated";

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import CourseListScreen from "./screens/CourseListScreen";
import CourseDetailScreen from "./screens/CourseDetailScreen";
import WishlistScreen from "./screens/WishlistScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CoursesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CourseList"
        component={CourseListScreen}
        options={{ title: "All Courses" }}
      />
      <Stack.Screen
        name="CourseDetail"
        component={CourseDetailScreen}
        options={({ route }) => ({ title: ((route?.params as any)?.title as string) ?? "Course Detail" })}
      />
    </Stack.Navigator>
  );
}

function CoursesTabs() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const name = route.name === "AllCourses" ? "book" : "heart";
          return <Ionicons name={name as any} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="AllCourses" component={CoursesStack} options={{ title: "Courses" }} />
      <Tabs.Screen name="Wishlist" component={WishlistScreen} options={{ title: "My Wishlist" }} />
    </Tabs.Navigator>
  );
  return (
    <Drawer.Navigator initialRouteName="Courses">
      <Drawer.Screen name="Courses" component={CoursesTabs} />
      <Drawer.Screen name="My Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
