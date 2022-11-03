import { StyleSheet, View, Image, Dimensions, Text } from "react-native";
import { millisToMinutesAndSeconds } from "../../utils";

export default function SongItem( {imageurl, title, artist, albumname, duration, index} ) {
    const songlength = millisToMinutesAndSeconds(duration);  // ask about this 
    return (
        <View style = {styles.item}>
            <View style = {styles.tracklistNum}> 
                <Text style = {styles.tracklistText}>{index}</Text> 
            </View>
            <View>
                <Image style = {styles.image} source = {{uri: imageurl}}/>
            </View>
            <View style = {styles.titleartist}>
                <Text numberOfLines = {1} style = {{color:'white'}}>{title}</Text>
                <Text numberOfLines = {1} style = {{color: 'gray'}}>{artist}</Text>
            </View>
            <View style = {styles.album}>
                <Text numberOfLines = {1} style = {{color: 'white'}}>{albumname}</Text>
            </View>
            <View style = {styles.durationStyle}>
                <Text style = {{color: 'white', alignItems: 'flex-end'}}>{songlength}</Text>
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
        //backgroundColor: 'red',
    },
    tracklistText: {
        color: 'gray',
        fontSize: 20,
        marginHorizontal: 2,
        //flex: 1,
    },
    image: {
        aspectRatio: 1,
        //height: 50,
        marginHorizontal: 2,
        //width: 50,
        width: windowWidth * 0.15,
        //width: '20%',
        alignItems: "center",
        justifyContent: 'center',
        //backgroundColor: 'blue',
        //flex: 1.5,
    },
    album: {
        color: 'white',
        alignItems: "flex-start",
        justifyContent: 'center',
        width: "27.5%",
        marginHorizontal: 4,
        //backgroundColor: 'orange',
    },
    titleartist: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 5,
        width: "32.5%",
        //backgroundColor: 'gray',
        //flex: 3,
    },
    durationStyle: {
        color: 'gray',
        width: "10%",
        //flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        //backgroundColor: 'white',
        //flex: 1, 
    },
  });