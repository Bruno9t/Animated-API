import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles'


interface GenreProps {
    genres:string[]
}

const Genres:React.FC<GenreProps> = ({genres}) => {
    return (
        <View style={styles.genres}>

            {
                genres.map((genre , index )=>(
                    <Text key={index} style={styles.genre} >{genre}</Text>
                ))
            }

        </View>
    )
}

export default Genres