import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import Estilo from './estilo'

export default ({inicial = 0, passo = 1}) => {
    //valor a ser altedaddo = numero || serNumero = função a ser executada para modificar o componente do componente anterior
    const [numero, setNumero] = useState(inicial)//tem um valor inicial e o segundo parametro como a função a ser executada 

    const inc = () => {
        setNumero(numero + passo)
        console.warn(numero)
    }
    const dec = () => setNumero(numero - passo)

    return (
        <>
            <Text style={Estilo.txtG}>{numero}</Text>
            <Button title="+" onPress={inc}/>
            <Button title="-" onPress={dec}/>        
        </>
    )
}
