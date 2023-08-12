import { Image, StyleSheet, View } from 'react-native';

import Text from '../components/Text/Text';

import { POPPINS } from '../styles/custom';

const phoneIcon = require('../assets/icons/phone.png');

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={phoneIcon} style={styles.icon} />
      <Text variant="headline-small" testID="home-text" style={styles.homeText}>
        Pantalla Home
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  icon: {
    marginBottom: 20,
  },
  homeText: {
    fontWeight: '500',
    fontFamily: POPPINS,
  },
});
