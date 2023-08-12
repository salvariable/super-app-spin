import React from 'react';
import { StyleSheet, View } from 'react-native';

import { useAppContext } from '../../context/AppContext';

import Tag from '../atoms/Tag';
import Text from '../Text/Text';

import handleConvertPointsToAmount from '../../helpers/handleConvertPointsToAmount';
import { handleFormatPoints } from '../../helpers/handleFormatPoints';

import { POPPINS } from '../../styles/custom';

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
    fontFamily: POPPINS,
    fontWeight: '700',
    marginBottom: 8,
  },
});
