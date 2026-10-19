import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const page4 = () => {
  type StatSummary = {
    title: string;
    count: number;
  };

  const { stats } = useLocalSearchParams<{ stats?: string }>();

  const statList: StatSummary[] = stats ? JSON.parse(stats) : [];
  return (
    <View style={styles.container}>
      <Text>Match Summary</Text>

      <View style={styles.summary}>
        {statList.map((stat) => (
          <View key={stat.title} style={styles.detailCont}>
            <Text style={styles.test}>{stat.title}</Text>
            <Text>{stat.count}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default page4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#afc0d8",
  },

  summary: {
    alignSelf: "center",
    backgroundColor: "#dce0e6",
    width: "80%",
    borderRadius: 15,
    flexWrap: "wrap",
    flexDirection: "row",
    borderWidth: 1,
  },

  detailCont: {
    width: "100%",
    flexDirection: "column",
    marginTop: 10,
    marginBottom: 5,
    borderBottomWidth: 3,
    justifyContent: "space-between",
  },
  test: {
    marginLeft: 4,
    width: "90%",
  },
});
