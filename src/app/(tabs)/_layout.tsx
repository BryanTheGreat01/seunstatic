import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Loading..." }} />
      <Tabs.Screen name="page2" options={{ title: "Home" }} />
      <Tabs.Screen name="page3" options={{title: "Stats"}} />
    </Tabs>
  );
}
