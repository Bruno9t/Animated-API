import React from 'react'
import { StyleSheet, View } from 'react-native'

import {AntDesign} from '@expo/vector-icons'

const Loading = () => {
    return (
        <View style={styles.loading}>
            <AntDesign name="star" size={50} color="tomato" />
        </View>
    )
}


const styles = StyleSheet.create({
    loading:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})

export default Loading