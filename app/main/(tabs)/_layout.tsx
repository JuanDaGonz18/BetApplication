import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFD700", // dorado
        tabBarInactiveTintColor: "#ccc",
        tabBarStyle: {
          backgroundColor: "#041c13",
          borderTopWidth: 0,
          height: 65,
        },
        headerShown: false,
      }}
    >
      {/* Tab de Inicio */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      {/* Tab vacío para después (ejemplo Apuestas) */}
      <Tabs.Screen
        name="name"
        options={{
          title: "title",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cash-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Último: Perfil */}
      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
