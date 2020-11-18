import React from 'react'
import { View, Text } from 'react-native'
import Estilo from './estilo'

export default props => (
    // pode se chamar por React.Fragment 
    //ou Fragment(tem que importar)
    // ou <> sem nenhuma nome(não pode usar nenhum parametro)
    <>
        <Text style={Estilo.txtG}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </>
)

// export default props => (
//     <View>
//         <Text style={Estilo.txtG}>{props.principal}</Text>
//         <Text>{props.secundario}</Text>
//     </View>
// )
