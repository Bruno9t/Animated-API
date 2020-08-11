import React from 'react'
import { Text, View } from 'react-native'

import {AntDesign} from '@expo/vector-icons'

import styles from './styles'


interface RaitingProps {
    rating:number
}

const Rating:React.FC<RaitingProps> = ({ rating }) => {

    const numberOfFilledStars = Math.floor(rating / 2)
    const filledStars:string[] = Array(numberOfFilledStars).fill('star')
    const restStars:string[] = Array(5 - numberOfFilledStars).fill('staro')

    const stars = [...filledStars,...restStars] 

    return (
        <View style={styles.rating} >
            <Text style={styles.ratingValue}>
                {rating}
            </Text>
            {stars.map((star,index) => (
                <AntDesign key={index} name={star} size={18} color="tomato"/>  
            ))}
        </View>
    )
}

export default Rating