import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { TStackBenefits } from '../types/navigation.types';

import { FEED, SELECT_ENTITY, TRANSACTIONS } from '../constants/screens';

import Text from '../components/Text/Text';
import BaseCard from '../components/Card/components/BaseCard';
import StackedCardGrid from '../components/GridView/StackedCardGrid';

type Props = {};

const Benefits = ({
  navigation,
}: NativeStackScreenProps<TStackBenefits, typeof FEED>) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <StackedCardGrid
          containerStyle={{ flex: 0.5 }}
          titlesSize="small"
          numberOfColumns={2}
          idForTestItems="grid-item"
          idForTestContainer="grid"
          data={[
            {
              title: 'Consulta tu historial',
              icon: <Image source={require('../assets/Images/star.png')} />,
              onPress: () => navigation.navigate(TRANSACTIONS),
            },
            {
              title: 'Cambia tus puntos',
              icon: <Image source={require('../assets/Images/ticket.png')} />,
              onPress: () => navigation.navigate(SELECT_ENTITY),
            },
          ]}
        />
        <BaseCard>
          <Text
            testID="promo-1-text"
            variant="default-body-bold"
            numberOfLines={2}>
            Acumula productos
          </Text>
          <Text variant="default-body-bold" numberOfLines={2}>
            Muy pronto...
          </Text>
          <Image
            source={require('../assets/Images/star-card.png')}
            style={{ height: 50, width: 50 }}
          />
        </BaseCard>
        <BaseCard>
          <Text
            testID="promo-2-text"
            variant="default-body-bold"
            numberOfLines={2}>
            Gana más puntos
          </Text>
          <Text variant="default-body-bold" numberOfLines={2}>
            Muy pronto...
          </Text>
          <Image
            source={require('../assets/Images/star-plus.png')}
            style={{ height: 50, width: 50 }}
          />
        </BaseCard>
        <BaseCard>
          <Text
            testID="promo-3-text"
            variant="default-body-bold"
            numberOfLines={2}>
            Suma al comprar
          </Text>
          <Text variant="default-body-bold" numberOfLines={2}>
            Muy pronto...
          </Text>
          <Image
            source={require('../assets/Images/star-ribbon.png')}
            style={{ height: 50, width: 50 }}
          />
        </BaseCard>
      </ScrollView>
    </View>
  );
};

export default Benefits;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
