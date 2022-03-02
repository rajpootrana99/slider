import { StatusBar } from "expo-status-bar";
import { FlatListSlider } from "react-native-flatlist-slider";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const images = [
    {
      id: 0,
      image: "https://images.unsplash.com/photo-1607326957431-29d25d2b386f",
      title: "Dahlia",
    }, // https://unsplash.com/photos/Jup6QMQdLnM
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1512238701577-f182d9ef8af7",
      title: "Sunflower",
    }, // https://unsplash.com/photos/oO62CP-g1EA
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1627522460108-215683bdc9f6",
      title: "Zinnia",
    }, // https://unsplash.com/photos/gKMmJEvcyA8
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1587814213271-7a6625b76c33",
      title: "Tulip",
    }, // https://unsplash.com/photos/N7zBDF1r7PM
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1588628566587-dbd176de94b4",
      title: "Chrysanthemum",
    }, // https://unsplash.com/photos/GsGZJMK0bJc
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1501577316686-a5cbf6c1df7e",
      title: "Hydrangea",
    }, // https://unsplash.com/photos/coIBOiWBPjk
  ];
  return (
    <View style={styles.container}>
      <FlatListSlider
        data={images}
        height={240}
        timer={5000}
        onPress={(item) => alert(JSON.stringify(item))}
        contentContainerStyle={{ paddingHorizontal: 0 }}
        indicatorContainerStyle={{ position: "absolute", bottom: 20 }}
        indicatorActiveColor={"#8e44ad"}
        indicatorInActiveColor={"#ffffff"}
        indicatorActiveWidth={30}
        animation
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
