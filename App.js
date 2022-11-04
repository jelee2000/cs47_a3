import { StyleSheet, SafeAreaView, Text } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import Authbutton from "./assets/components/authbutton";
import Tracklist from "./assets/components/tracklist";
//import SongItem from "./assets/components/song";

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
   const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  let contentDisplayed = null;

  if (token) {
    contentDisplayed = <Tracklist tracks = {tracks} />
  } else {
    contentDisplayed = <Authbutton getSpotifyAuth= {getSpotifyAuth}/>
  }
  
  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
