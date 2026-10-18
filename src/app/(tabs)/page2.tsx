import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Calendar } from "react-native-calendars";
import React from "react";
import { useState } from "react";
import { router } from "expo-router";

const page2 = () => {
  //i will add a usestate here to store the game title
  //another one to store the selected date
  const [title, setTitle] = useState("");

  const handleTitle = (value: string) => {
    setTitle(value);
    console.log(title);
  };

  const goToPage3 = () => {
    router.navigate({
      pathname: "/(tabs)/page3",
      params: { title },
    });
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={(day) => {
          console.log("selected day", day);
        }}
        style={styles.calendar}
      />

      <View style={styles.titleContainer}>
        <Text style={styles.title}> Game Title</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={handleTitle}
          placeholder="  Enter game title"
          placeholderTextColor="#afc0d8"
        />
        <View style={styles.btnStyle}>
          <Button title="Next" onPress={goToPage3} />
        </View>
      </View>
    </View>
  );
};

export default page2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#afc0d8",
  },

  calendar: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "black",
    width: 350,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  titleContainer: {
    marginTop: 20,

    width: 350,
    alignItems: "flex-start",
  },
  input: {
    borderWidth: 1,
    borderColor: "#afc0d8",
    width: 350,
    backgroundColor: "white",
    borderRadius: 5,
    height: 35,
    padding: 5,
  },

  btnStyle: {
    width: "30%",
    marginTop: 15,
    alignSelf: "center",
  },
});
