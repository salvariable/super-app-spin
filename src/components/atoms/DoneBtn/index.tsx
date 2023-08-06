import React from 'react';
import {
  Button,
  Dimensions,
  InputAccessoryView,
  Keyboard,
  Platform,
  StyleSheet,
  View,
} from 'react-native';

interface DoneBtnProps {
  inputAccessoryViewID: string;
  title?: string;
  onPress?: () => void;
}

const DoneBtn = ({ inputAccessoryViewID, title, onPress }: DoneBtnProps) => {
  const handleOnPress = () => {
    if (onPress) onPress();
    else Keyboard.dismiss();
  };
  return Platform.OS === 'ios' ? (
    <InputAccessoryView nativeID={inputAccessoryViewID}>
      <View style={styles.accessory}>
        <Button title={title || 'Listo'} onPress={handleOnPress} />
      </View>
    </InputAccessoryView>
  ) : null;
};

const styles = StyleSheet.create({
  accessory: {
    width: Dimensions.get('window').width,
    height: 48,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 8,
    borderTopWidth: 0.5,
    borderTopColor: '#dedcdc',
  },
});

export default DoneBtn;
