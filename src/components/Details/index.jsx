import { View, Text } from 'react-native'
import { DetailsStyles } from './DetailsStyles'

export default function Details() {
    const styles = DetailsStyles

    return (
        <View style={styles.detailsContainer}>
            <Text>Here will be an info</Text>
        </View>
    )
}
