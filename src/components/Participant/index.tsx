import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type PropsType = { 
  name: string,
  onRemove: () => void,
}

export function Participant({ name, onRemove } : PropsType) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>

      <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.buttonText} onPress={() => onRemove}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  )
}