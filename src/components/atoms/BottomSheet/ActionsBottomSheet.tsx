import React from 'react';
import { View, StyleSheet } from 'react-native';

import type { ActionsBottomSheet as IActionsBottomSheet } from './types';
import Button from '../../../components/Button/Button';

enum Actions {
  FIRST = 0,
  SECOND = 1,
  TERTIARY = 2,
}

const ActionsBottomSheet = ({
  buttons,
}: {
  buttons?: IActionsBottomSheet[];
}) => {
  const getVariantButton = (index: number) => {
    if (index === Actions.FIRST) {
      return 'primary';
    } else if (index === Actions.SECOND) {
      return 'secondary';
    } else if (index === Actions.TERTIARY) {
      return 'hyperlink';
    }

    return 'primary';
  };

  return (
    <>
      {buttons?.map((button, index) => (
        <View key={index} style={styles.action}>
          <Button
            testID={button.testID ?? `action-bottom-sheet-${index}`}
            variant={getVariantButton(index)}
            text={button.text}
            onPress={button.onPress}
          />
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  action: {
    marginVertical: 5,
  },
});

export default ActionsBottomSheet;
