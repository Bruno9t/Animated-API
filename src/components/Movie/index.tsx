import React from 'react'
import { Image, Text, View } from 'react-native'
import {MovieArrayProps} from '../../types'

import Rating from '../Rating'

import styles from './styles'


interface MovieProps {
    movie:MovieArrayProps
}

const Movie:React.FC<MovieProps> = ({movie}) => {
    return (
        <View style={styles.container}>
            <Image  
            style={styles.moviePoster}
            source={{
                uri:movie.poster
            }}  />

            <Text style={styles.title}numberOfLines={1} >{movie.title}</Text>

            <Rating rating={movie.rating} />

            <Text>Gêneros</Text>

            <Text style={styles.description} numberOfLines={3}>
                {movie.description}
            </Text>
        </View>
    )
}

export default Movie