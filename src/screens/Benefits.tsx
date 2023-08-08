import { Image, ScrollView, StyleSheet, View } from "react-native"
import Text from '../components/Text/Text'
import BaseCard from "../components/Card/components/BaseCard"
import StackedCardGrid from "../components/GridView/StackedCardGrid"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { TStackBenefits } from "../types/navigation.types"
import { FEED, TRANSACTIONS } from "../constants/screens"

type Props = {}

export const Benefits = ({ navigation }: NativeStackScreenProps<TStackBenefits, typeof FEED>) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <StackedCardGrid containerStyle={{ flex: 0.5 }} titlesSize='small' numberOfColumns={2} idForTestContainer="grid" data={[
                    {
                        title: 'Consulta tu historial',
                        icon: <Image source={require('../assets/Images/star.png')} />,
                        onPress: () => navigation.navigate(TRANSACTIONS)
                    },
                    {
                        title: 'Cambia tus puntos',
                        icon: <Image source={require('../assets/Images/ticket.png')} />,
                        onPress: () => console.log("la 2")
                    },
                ]} />
                <BaseCard>
                    <Text testID="promo-1-text" variant="default-body-bold" numberOfLines={2}>
                        Acumula productos
                    </Text>
                    <Text variant="default-body-bold" numberOfLines={2}>
                        Muy pronto...
                    </Text>
                    <Image source={require('../assets/Images/star-card.png')} style={{ height: 50, width: 50 }} />
                </BaseCard>
                <BaseCard>
                    <Text testID="promo-2-text" variant="default-body-bold" numberOfLines={2}>
                        Gana más puntos
                    </Text>
                    <Text variant="default-body-bold" numberOfLines={2}>
                        Muy pronto...
                    </Text>
                    <Image source={require('../assets/Images/star-plus.png')} style={{ height: 50, width: 50 }} />
                </BaseCard>
                <BaseCard>
                    <Text testID="promo-3-text" variant="default-body-bold" numberOfLines={2}>
                        Suma al comprar
                    </Text>
                    <Text variant="default-body-bold" numberOfLines={2}>
                        Muy pronto...
                    </Text>
                    <Image source={require('../assets/Images/star-ribbon.png')} style={{ height: 50, width: 50 }} />
                </BaseCard>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1 }
})