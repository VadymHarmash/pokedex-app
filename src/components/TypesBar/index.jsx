import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { TypesBarStyles } from "./TypesBarStyles";
import { getColorForType } from "../../constants/AbilitityColor";

export default function TypesBar() {
    const styles = TypesBarStyles;
    const [types, setTypes] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type')
            .then(res => res.json())
            .then(data => {
                setTypes(data.results);
            })
    }, []);

    return (
        <View style={styles.typesBar}>
            <FlatList
                style={styles.typesList}
                data={types}
                keyExtractor={type => type.name}
                numColumns={3}
                renderItem={({ item }) => (
                    <TouchableOpacity
                    style={{
                        ...styles.typesListItem,
                        backgroundColor: getColorForType(item.name),
                    }}
                        onPress={() => console.log(item.name)}
                    >
                        <Text style={styles.typesBarText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
