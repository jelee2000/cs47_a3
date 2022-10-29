import { StyleSheet, View, Image, SafeAreaView, Text } from "react-native";
import { Themes } from "../Themes";
import { millisToMinutesAndSeconds } from "../../utils";

export default function SongItem( {imageurl, title, artist, albumname, duration, index} ) {
    const songlength = millisToMinutesAndSeconds(duration);  // ask about this 
    return (
        <SafeAreaView style = {styles.item}>
            <Text style = {styles.index}>{index}</Text>
            <Image style = {styles.image} source = {{uri: imageurl}}/>
            <SafeAreaView style = {styles.titleartist}>
                <Text numberOfLines = {1} style = {{color:'white'}}>{title}</Text>
                <Text numberOfLines = {1} style = {{color: 'gray'}}>{artist}</Text>
            </SafeAreaView>
            <SafeAreaView style = {styles.albumduration}>
                <Text numberOfLines = {1} style = {styles.album}>{albumname}</Text>
                <Text style = {{color: 'gray', alignItems: 'flex-end'}}>{songlength}</Text>
            </SafeAreaView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      marginBottom: 5,
      width: '100%',
      //flex: 1,
    },
    index: {
        alignItems: "flex-start",
        flexDirection: 'row',
        color: 'gray',
        alignItems: "center",
        justifyContent: 'center',
        marginHorizontal: 2,
        width: "5%",
        //flex: 1,
    },
    image: {
        width: '12%',
        aspectRatio: 1,
        height: undefined,
        marginHorizontal: 2,
        alignItems: "center",
        justifyContent: 'center',
        //flex: 1.5,
    },
    albumduration: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        width: "42%",
        justifyContent: 'space-between',
        resizeMode: 'contain',
        marginHorizontal: 5,
    },
    album: {
        color: 'white',
        //flex: 1,
        width: "40%",
    },
    titleartist: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginHorizontal: 2,
        width: "35%",
        //flex: 3,
    },
    durationStyle: {
        color: 'gray',
        width: "7%",
        flexDirection: 'row',
        // alignItems: "center",
        // justifyContent: 'center',
        //flex: 1, 
    },
  });