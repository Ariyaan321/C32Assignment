import { Tabs } from "expo-router";



export default function TabLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen
                name="home"
                options={{
                    tabBarLabel: "Home",
                    title: "Home",
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    tabBarLabel: "Settings",
                    title: "Settings",
                }}
            />
        </Tabs>
    )
}