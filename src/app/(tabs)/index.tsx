import { Text, View, StyleSheet, Image, Button, Pressable } from "react-native";
import { Link, useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <Link href="/(tabs)/page2" asChild>
      <Pressable style={styles.container}>
        <View style={styles.box}>
          <Image
            source={require("../../../Images/soccer_ball.png")}
            style={styles.ballImage}
          />
        </View>
        <Text style={styles.name}>SeunStatic</Text>
        <Text style={styles.description}>Performance tracker</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  name: {
    fontSize: 30,
    fontWeight: "bold",
  },

  description: {
    fontSize: 16,
    color: "#black",
  },

  box: {
    backgroundColor: "#afc0d8",
    width: 70,
    height: 70,
    borderRadius: 10,
    marginBottom: 20,
  },

  ballImage: {
    width: 70,
    height: 70,
  },
});
