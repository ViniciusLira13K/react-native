import React from 'react'
import { SafeAreaView, StyleSheet }  from 'react-native'

import Contador from './components/Contador'
//import Botao from './components/Botao'
//import Titulo from './components/Titulo'
//import Aleatorio from './components/Aleatorio'
//import MinMax from './components/MinMax'
// import Primeiro from './components/Primeiro'
// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
 

export default  () => (
          <SafeAreaView style={style.App}>
               
               <Contador inicial = {100}/>
                {/*
               <Botao/>   
               <Titulo principal="Cadastro Produto" 
               secundario="Texto na descrição. "></Titulo>
                <Aleatorio max={10} min={1}></Aleatorio>
               <Aleatorio max={100} min={50}></Aleatorio>
               <MinMax min={5} max={10}/>
               <MinMax min={10} max={15}/> 
                 <CompPadrao />
                <Comp1 />
                <Comp2 />
                <Primeiro></Primeiro> */}
          </SafeAreaView>
     )

const style = StyleSheet.create({
     App: {
          flexGrow: 1, //estende o tamanho do componente
          justifyContent: "center",// centraliza na vertical
          alignItems: "center",// centraliza na horizontal
          padding: 20          
     }
})
// export default  () => 
//      <Text>Primeiro Comando!!</Text>

//area function
// export default  () => {
//     return <Text>Primeiro Comando!!!</Text>
// }

// export default function (){
//     return <Text>Primeiro Comando</Text>
// }

//função anonima
// const App = function (){
//     return <Text>Primeiro Comando</Text>
// }

// function App(){
//     return <Text>Primeiro Comando</Text>
// }

//  export default App