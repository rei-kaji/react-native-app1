import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./style.js";

export default function StyledButton({ buttonText = "Custom Order", type }) {
  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const textColor = type === "primary" ? "#FFFFFF" : "#171A20";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => {
          console.warn(`Wow! You pressed ${buttonText} button!`);
        }}
      >
        <Text style={[styles.text, { color: textColor }]}>{buttonText}</Text>
      </Pressable>
    </View>
  );
}
