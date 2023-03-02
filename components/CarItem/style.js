import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  carContainer: { width: "100%", height: Dimensions.get("window").height },
  titles: { marginTop: "30%", width: "100%", alignItems: "center" },
  title: { fontSize: 40, fontWeight: 600 },
  subtitle: { fontSize: 16, color: "#5c526e" },
  subtitleCTA: {
    textDecorationLine: "underline",
  },
  buttonContainer: { position: "absolute", width: "100%", bottom: 50 },
});

export default styles;
