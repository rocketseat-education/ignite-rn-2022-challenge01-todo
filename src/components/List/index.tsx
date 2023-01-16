import { FlatList, View } from "react-native";

import { Task } from "../../screens/Home";
import { Empty } from "./Empty";
import { Header } from "./Header";
import { Item } from "./Item";
import { styles } from "./styles";

type Props = {
  data: Task[]
  removeTask: (taskIdToBeRemoved: number) => void;
  toggleTaskCheck: (taskIdToBeChecked: number) => void;
}

export function List({ data, removeTask, toggleTaskCheck }: Props) {
  return (
    <View style={styles.container}>
      <Header data={data} />
      
      <FlatList 
        data={data}
        renderItem={({ item }) => (
          <Item 
            item={item}
            removeTask={removeTask}
            toggleTaskCheck={toggleTaskCheck}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Empty />}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
  )
}