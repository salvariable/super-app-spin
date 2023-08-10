import { Image, ScrollView, StyleSheet, View } from 'react-native';

import BenefitsBanner from '../components/custom/BenefitsBanner';
import BenefitsCard from '../components/custom/BenefitsCard';
import MyPoints from '../components/custom/MyPoints';
import Text from '../components/Text/Text';
import TransactionsPoints from '../components/custom/TransactionsPoints';

const spinImg = require('../assets/Images/spin.png');

const Benefits = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.pointsHeader}>
        <View>
          <Text variant="small-body" numberOfLines={2}>
            Tienes
          </Text>
          <MyPoints />
        </View>
        <Image source={spinImg} />
      </View>
      <TransactionsPoints style={styles.transactionsPointsContainer} />
      <BenefitsCard
        title="Acumula productos"
        body="Muy pronto podrás sumar tus compras y ganar productos de regalos"
        img={require('../assets/Images/star-card.png')}
      />
      <BenefitsCard
        title="Gana más puntos"
        body="Muy pronto podrás ganar más puntos en el total de tu compra"
        img={require('../assets/Images/star-plus.png')}
      />
      <View style={styles.divider} />
      <BenefitsCard
        title="Suma al comprar"
        body="Muy pronto podrás acumular compras y llevarte productos de regalo"
        img={require('../assets/Images/star-ribbon.png')}
      />
      <View style={styles.divider} />
      <BenefitsBanner />
    </ScrollView>
  );
};

export default Benefits;

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: 'white' },
  pointsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  transactionsPointsContainer: {
    marginBottom: 16,
  },
  gridContainer: {
    width: '100%',
    flex: 1,
    marginBottom: 16,
  },
  gridItem: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#E5E5E5',
    marginVertical: 8,
  },
});
