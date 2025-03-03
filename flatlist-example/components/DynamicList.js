import { FlatList, View, Text } from "react-native";
import data from "../data/data";
import styles from "../styles/styles";

export default function DynamicList() {
    return (
    <FlatList style={styles.Flatlist}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
        <View>
            <Text style={styles.flatText}>{item.name}</Text>
            <Text style={styles.flatText}>{item.age}</Text>
        </View>
        )}
    />
    );
}