import React, {useState} from "react"
import { Text, View, Button} from 'react-native'


export default tudo => {
const [soma, valor] = useState(0)
const [decsoma, decvalor] = useState(0)
const all = soma + decsoma


function botao (){
  valor(soma + 1)
  
}
function decbotao(){
  decvalor(decsoma - 1)
}
  return(
    <View style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }}> 
    <Text> {all} </Text>
    <Button title="Aumente aqui" onPress={botao} />

    <Button title="Diminua aqui  " onPress={decbotao} />
    </View>
  )

}