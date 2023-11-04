import { FlatList, Text, TextInput, TouchableOpacity, View, Alert } from "react-native"
import { styles } from './styles'
import { Participant } from "../../components/Participant"

export default function Home() {
  const participants = [
    'jp', 'leo', 'vini', 'mathew'
  ]

  function handleParticipantAdd() {
    if(participants.includes('leo')){
      Alert.alert('Participante', 'Já existe um participante com esse nome!')
      return
    }
    console.log('Clicked')
  }

  function handleParticipantRemove(name: string){
    Alert.alert('Remover', `Remover participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!'),
      },
      {
        text: 'Não',
        style: 'cancel',
      }
    ])
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

      {/*FlatList é mais performático que a renderização por map normal*/}
      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
            key={item} 
            name={item} 
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Nenhum usuário adicionado
          </Text>
        )}
      />
    </View>
  )
}