import { Image, Text, View } from "react-native";

import clipboardImg from '../../../assets/Clipboard.png';
import { styles } from "./styles";

export function Empty() {
  return (
    <View style={styles.container}>
      <Image source={clipboardImg} />
      <Text style={styles.boldText}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.normalText}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}