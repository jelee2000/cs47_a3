import { StyleSheet, View, Image, Dimensions, Text } from "react-native";
import { getFontSize, millisToMinutesAndSeconds } from "../../utils";

const fontSize = getFontSize()

export default function SongItem( {imageurl, title, artist, albumname, duration, index} ) {
    const songlength = millisToMinutesAndSeconds(duration);  
    return (
        <View style = {styles.item}>
            <View style = {styles.tracklistNum}> 
                <Text style = {styles.tracklistText}>{index}</Text> 
            </View>
            <View>
                <Image style = {styles.image} source = {{uri: imageurl}}/>
            </View>
            <View style = {styles.titleartist}>
                <Text numberOfLines = {1} style = {{color:'white', fontSize: fontSize}}>{title}</Text>
                <Text numberOfLines = {1} style = {{color: 'gray', fontSize: fontSize}}>{artist}</Text>
            </View>
            <View style = {styles.album}>
                <Text numberOfLines = {1} style = {{color: 'white', fontSize: fontSize}}>{albumname}</Text>
            </View>
            <View style = {styles.durationStyle}>
                <Text style = {{color: 'white', fontSize: fontSize, alignItems: 'flex-end'}}>{songlength}</Text>
            </View>
        </View>
    )
}
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      marginBottom: 5,
      width: '100%',
    },
    tracklistNum: {
        alignItems: "center",
        justifyContent: 'center',
        width: "10%",
    },
    tracklistText: {
        color: 'gray',
        fontSize: fontSize,
        marginHorizontal: 2,
    },
    image: {
        aspectRatio: 1,
        marginHorizontal: 2,
        width: windowWidth * 0.15, // 15% of the window 
        alignItems: "center",
        justifyContent: 'center',
    },
    album: {
        color: 'white',
        alignItems: "flex-start",
        justifyContent: 'center',
        width: "27.5%",
        marginHorizontal: 4,
    },
    titleartist: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 5,
        width: "32.5%",
    },
    durationStyle: {
        color: 'gray',
        width: "10%",
        alignItems: "center",
        justifyContent: 'center',
    },
  });