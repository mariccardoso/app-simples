import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#9102f0",
                tabBarInactiveColor: "#8E8E93",
                tabBarStyle: {
                    backgroundColor: "#fff", // cor de fundo da barra de navegação
                    height: 70,
                    borderRadius: 25,
                    boxShadow: "0px -5px 11px rgba(0, 0, 0, 0.2)",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    alignSelf: "center",
                    position: "absolute",
                    bottom: 40,
                    width: "80%",
                    marginHorizontal: "10%",
                    paddingHorizontal: 20,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    marginBottom: 5,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarLabel: "", // Remove o texto abaixo do ícone
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="news"
            
                options={{
                    tabBarLabel: "", // Remove o texto abaixo do ícone
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="newspaper-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarLabel: "", // Remove o texto abaixo do ícone
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" color={color} size={size} />
                    ),
                }}
            />
        </Tabs>
        
    );
}
