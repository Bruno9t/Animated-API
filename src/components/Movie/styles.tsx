import { Dimensions, StyleSheet } from "react-native";

const {width:SCREEN_WIDTH} = Dimensions.get('window')


const POSTER_RATIO = 440/660

const POSTER_HEIGHT = 300
const POSTER_WIDTH = POSTER_HEIGHT * POSTER_RATIO


const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        margin:10,
        alignItems:"center",
        width:SCREEN_WIDTH * 0.72,
        borderRadius:20,
        padding:20
    },
    moviePoster:{
        height:POSTER_HEIGHT,
        width:POSTER_WIDTH,
        borderRadius:20
    },
    title:{
        fontWeight:"bold",
        fontSize:20,
        marginTop:10,
        marginBottom:0
    },
    description:{
        textAlign:"justify",
        margin:10,
        fontSize:16,
    }
})

export default styles