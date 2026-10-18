import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ImageSourcePropType,
  Button,
} from "react-native";
import React from "react";
import { useState } from "react";
import { Tabs, useLocalSearchParams } from "expo-router";
import { router } from "expo-router";

type Stat = {
  id: number;
  title: string;
  image: ImageSourcePropType;
  count: number;
};

const boxes: Stat[] = [
  {
    id: 1,
    title: "Shots",
    image: require("../../../assets/images/shots.png"),
    count: 0,
  },
  {
    id: 2,
    title: "Shots on Target",
    image: require("../../../assets/images/shots_on_target.png"),
    count: 0,
  },
  {
    id: 3,
    title: "Assists",
    image: require("../../../assets/images/assists.png"),
    count: 0,
  },
  {
    id: 4,
    title: "Passes",
    image: require("../../../assets/images/passes.png"),
    count: 0,
  },
  {
    id: 5,
    title: "Loss",
    image: require("../../../assets/images/loss.png"),
    count: 0,
  },
  {
    id: 6,
    title: "Duels Won",
    image: require("../../../assets/images/duels_won.png"),
    count: 0,
  },
  {
    id: 7,
    title: "Duels Lost",
    image: require("../../../assets/images/duels_lost.png"),
    count: 0,
  },
];

const page3 = () => {
  const { title } = useLocalSearchParams<{ title?: string }>();
  const [stats, setStats] = useState<Stat[]>(boxes);

  const increment = (id: number) => {
    console.log(id);
    setStats((current) =>
      current.map((box) =>
        box.id === id ? { ...box, count: box.count + 1 } : box,
      ),
    );
  };

  const goToPage4 = () => {
    router.navigate({
      pathname: "/(tabs)/page4",
      params: {
        stats: JSON.stringify(
          stats.map(({ title, count }) => ({ title, count })),
        ),
      },
    });
  };

  return (
    <View style={styles.container}>
      <Tabs.Screen options={{ headerTitle: title || "Game" }} />
      <View style={styles.boxContainer}>
        {stats.map((box) => (
          <Pressable
            key={box.id}
            style={styles.box}
            onPress={() => increment(box.id)}
          >
            <View style={styles.img_container}>
              <Image source={box.image} style={styles.image} />
            </View>

            <Text style={styles.title}>
              {box.title} ({box.count})
            </Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.btn}>
        <Button title="End Game" onPress={goToPage4} color="red" />
      </View>
    </View>
  );
};

export default page3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#afc0d8",
  },

  boxContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
    marginTop: 20,
    backgroundColor: "#bdc7d4",
    marginLeft: 20,
    marginRight: 20,
    padding: 15,
  },

  box: {
    width: "45%", // this determines the number of boxes boxes per row
    height: 120,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  img_container: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  title: {
    fontWeight: "bold",
    fontSize: 15,
  },

  btn: {
    marginTop: 15,
    borderRadius: 10,
    width: "40%",
  },
});
