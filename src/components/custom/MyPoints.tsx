import React from 'react';
import { StyleSheet, View } from 'react-native';

import Tag from '../atoms/Tag';
import Text from '../Text/Text';

import { useAppContext } from '../../context/AppContext';
import handleConvertPointsToAmount from '../../helpers/handleConvertPointsToAmount';
import { handleFormatPoints } from '../../helpers/handleFormatPoints';

const MyPoints = () => {
  const { balancePoints } = useAppContext();

  return (
    <View>
      <Text variant="title-two-semibold" style={styles.pointsValue}>
        {handleFormatPoints(balancePoints)} puntos
      </Text>
      <Tag
        text={`Valen ${handleConvertPointsToAmount(balancePoints)}`}
        variant="points"
      />
    </View>
  );
};

export default MyPoints;

const styles = StyleSheet.create({
  pointsValue: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
