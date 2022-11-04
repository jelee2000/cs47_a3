import { StyleSheet, Dimensions, Image, Text, Button, View } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { getFontSize } from "../../utils";
import { Themes, Images } from "../Themes";

const windowWidth = Dimensions.get('window').width;
const fontSize = getFontSize()

export default function Authbutton( {getSpotifyAuth} ) {
  return (
    <Pressable style = {styles.container}  onPress={getSpotifyAuth}>
        <Image source = {Images.spotify} style = {styles.image} ></Image>
        <Text style = {styles.text}>CONNECT WITH SPOTIFY</Text>
    </Pressable>
  );
}
// make text componennt inside the pressable 
const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.spotify,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    //flex: 1,
    borderRadius: 99999,
  },
  image: {
    borderRadius: 99999,
    height: windowWidth * 0.1,
    width: windowWidth * 0.1,
    //height: 25,
    //width: 25,
    //resizeMode: 'contain'
    // dimensions object 
  },
  text: {
    fontSize: fontSize,
    color: 'white',
    paddingHorizontal: 20,
    fontWeight: "bold",
  }
});
