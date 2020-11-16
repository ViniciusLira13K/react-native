import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

function componente(props) {
    var aleatorio = getRandom(props.max, props.min)
    console.warn(aleatorio)
    return (
        <Text style={Estilo.txtG}>
            Número gerado aleatoriamente é {aleatorio}
        </Text>
    )
}

function getRandom(max, min) {
    return Math.floor(Math.random() * max + min)
} 

export default componente
