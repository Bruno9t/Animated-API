import React, { useEffect, useState } from 'react'
import { View ,Text, ScrollView, Image} from 'react-native'
import { MovieArrayProps} from '../types'
import {getMovies} from '../services/api'

import Movie from '../components/Movie'

import styles from './styles'


const Movies = () => {

    const [movies,setMovies] = useState<MovieArrayProps[]>([])


    useEffect(()=>{
        getMovies().then((movies)=>{
            setMovies(movies)
        })
    },[])

    return (
        <View style={styles.container}>
            <ScrollView
            contentContainerStyle={{
                alignItems:"center",
                justifyContent:"center"
            }}
            horizontal
            >
                {movies.map((movie,index)=>(
                    <Movie key={index} movie={movie} />
                ))}
            </ScrollView>
        </View>
    )
}

export default Movies