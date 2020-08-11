import React from 'react'
import { Animated, Image, ScrollView, Text, View } from 'react-native'
import {MovieArrayProps} from '../../types'

import Rating from '../Rating'
import Genres from '../Genres'

import styles from './styles'


interface MovieProps {
    movie:MovieArrayProps
    animation:{
        translateY:Animated.AnimatedInterpolation
    }
}

const Movie:React.FC<MovieProps> = ({movie,animation:{translateY}}) => {
    return (
        <Animated.View 
        style={[styles.container,{
            transform:[{ translateY }]
        }]}
        >
            <Image  
            style={styles.moviePoster}
            source={{
                uri:movie.poster
            }}  />

            <Text style={styles.title}numberOfLines={1} >{movie.title}</Text>

            <Rating rating={movie.rating} />

            <Genres genres={movie.genres} />

            <Text style={styles.description} numberOfLines={3}>
                {movie.description}
            </Text>
        </Animated.View>
    )
}

export default Movie