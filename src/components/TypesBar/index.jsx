import React, { useEffect, useState } from "react"
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import { TypesBarStyles } from "./TypesBarStyles"
import { getColorForType } from "../../constants/AbilitityColor"

export default function TypesBar() {
    const styles = TypesBarStyles
    const [types, setTypes] = useState([])
    const [selectedType, setSelectedType] = useState(null)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type')
            .then(res => res.json())
            .then(data => {
                setTypes(data.results)
            })
    }, [])

    const fetchByType = async (type) => {
        if (type) {
            await fetch(`https://pokeapi.co/api/v2/type/${type}`)
                .then(res => res.json())
                .then(data => console.log(data['name']))
                .catch(error => console.error("Error fetching by type:", error))
        }
    }

    const handleTypePress = (type) => {
        setSelectedType(type)
        fetchByType(type)
    }

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
                            borderColor: selectedType === item.name ? 'blue' : 'transparent',
                        }}
                        onPress={() => handleTypePress(item.name)}
                    >
                        <Text style={styles.typesBarText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}