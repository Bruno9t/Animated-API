import React, { useEffect, useRef, useState } from 'react'
import { View ,Text,FlatList, Dimensions, Animated} from 'react-native'
import { MovieArrayProps} from '../types'
import {getMovies} from '../services/api'

import Movie from '../components/Movie'
import Loading from '../components/Loading'

import styles from './styles'

const {width} = Dimensions.get('window')

const ITEM_SIZE = width * 0.72
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2


const Movies = () => {

    const [movies,setMovies] = useState<MovieArrayProps[]>([])

    const [spacerMovies,setSpacer] = useState<any[]>([])
    const scrollX = useRef(new Animated.Value(0)).current


    useEffect(()=>{
        getMovies().then((movies)=>{
            setMovies(movies)
            setSpacer([{key:'left-spacer'},...movies,{key:'right-spacer'}])
        })
    },[movies])

    if(movies.length===0){
        return <Loading />
    }

    return (
        <View style={styles.container}>
            <Animated.FlatList
            showsHorizontalScrollIndicator={false}
            data={spacerMovies}
            keyExtractor={(item:MovieArrayProps)=>String(item.key)}
            horizontal
            contentContainerStyle={{
                alignItems:"center"
            }}

            snapToInterval={ITEM_SIZE}
            decelerationRate={0}
            bounces={false}

            scrollEventThrottle={16}

            onScroll={Animated.event(
                [{nativeEvent:{contentOffset:{x:scrollX}}}],
                {useNativeDriver:true}
            )}

            renderItem={({item,index}:{item:MovieArrayProps,index:number})=>{
                if(!item.poster){
                    return <View style={{width:SPACER_ITEM_SIZE}} />
                }

                const inputRange = [
                    (index - 2 ) * ITEM_SIZE,
                    (index - 1) * ITEM_SIZE,
                    index * ITEM_SIZE,
                ]

                const translateY = scrollX.interpolate({
                    inputRange,
                    outputRange:[0,-40,0]
                })


                return  (
                    <View style={{width:ITEM_SIZE}}>
                        <Movie movie={item} animation={{translateY}} />
                    </View>
                )
            }}
            />
        </View>
    )
}

export default Movies