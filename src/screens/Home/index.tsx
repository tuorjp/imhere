import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from './styles'
import { Participant } from "../../components/Participant"

export default function Home() {
  const participants = [
    'jp', 'leo', 'vini', 'mathew'
  ]

  function handleParticipantAdd() {
    console.log('Clicked')
  }

  function handleParticipantRemove(name: string){
    console.log(`Remover ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de novembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={'#6B6B6B'}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleParticipantAdd()}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {
          participants.map((e, i) => {
            return (
              <Participant 
                key={i} 
                name={e} 
                onRemove={() => handleParticipantRemove(e)}
              />
            )
          })
        }
      </ScrollView>
    </View>
  )
}