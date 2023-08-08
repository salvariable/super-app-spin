import { StyleSheet, Text, View } from "react-native"

type Props = {}

export const Home = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text testID="home-text">
                Pantalla Home
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
})