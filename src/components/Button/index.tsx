import { TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onPress: () => void;
}

export function Button({ children, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.6}>
      {children}
    </TouchableOpacity>
  )
}