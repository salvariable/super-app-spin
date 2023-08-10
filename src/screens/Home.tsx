import { Image, StyleSheet, Text, View } from 'react-native';

const phoneIcon = require('../assets/icons/phone.png');

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={phoneIcon} style={styles.icon} />
      <Text testID="home-text">Pantalla Home</Text>
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
});
