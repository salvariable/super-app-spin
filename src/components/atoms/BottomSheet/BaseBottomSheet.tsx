import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Pressable,
  Modal,
  LayoutChangeEvent,
  SafeAreaView,
} from 'react-native';
import Text from '../../Text/Text';
import useThemedStyles from '../../../hooks/useThemedStyles';
import type { BaseBottomSheetProps } from './types';
import type { ThemeType } from '../../../theme/types';
import ActionsBottomSheet from './ActionsBottomSheet';

const closeIcon = require('../../../assets/bottom-sheet-close.png');

const BaseBottomSheet = ({
  children,
  onClose,
  title,
  testID,
  buttons,
  visible,
  contentStyle,
  onCallbackClose,
  headerBackgroundColor = '#FFFFFF',
  bodyBackgroundColor = '#FFFFFF',
  closeIconPosition = 'right',
}: BaseBottomSheetProps) => {
  const [open, setOpen] = useState(false);
  const totalHeight = Dimensions.get('window').height;
  const customTranslateY = useRef(new Animated.Value(totalHeight)).current;
  const [titleHeight, setTitleHeight] = useState(0);
  const [bodyHeight, setBodyHeight] = useState(0);
  const style = useThemedStyles(styles);

  useEffect(() => {
    if (visible) {
      setOpen(visible);
      Animated.timing(customTranslateY, {
        toValue: totalHeight - (bodyHeight + titleHeight),
        duration: 350,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(customTranslateY, {
        toValue: totalHeight,
        duration: 350,
        useNativeDriver: true,
      }).start();
      setTimeout(() => setOpen(false), 350);
    }
  }, [visible, customTranslateY, bodyHeight, totalHeight, titleHeight]);

  const onCloseHandler = () => {
    onClose && onClose();
    onCallbackClose();
  };

  const onLayoutTitleHandler = (event: LayoutChangeEvent) => {
    setTitleHeight(event.nativeEvent.layout.height);
  };

  const onLayoutBodyHandler = (event: LayoutChangeEvent) => {
    setBodyHeight(event.nativeEvent.layout.height);
  };

  const titleComponent = (
    <View style={style.titleContainer}>
      <Text variant="headline-medium" style={style.title}>
        {title}
      </Text>
    </View>
  );

  return (
    <View>
      <Modal
        onRequestClose={onCloseHandler}
        testID={testID}
        animationType="none"
        transparent
        visible={open}
      >
        <Pressable
          testID="outside"
          style={style.outside}
          onPress={onCloseHandler}
        />
        <Animated.View
          style={[
            style.animateContainer,
            {
              transform: [{ translateY: customTranslateY }],
            },
          ]}
        >
          <View style={style.content}>
            <View
              style={[style.header, { backgroundColor: headerBackgroundColor }]}
              onLayout={onLayoutTitleHandler}
            >
              <View style={style.headerIndicator} />

              <View
                style={
                  closeIconPosition === 'right' ? style.rowReverse : style.row
                }
              >
                <TouchableOpacity
                  testID="close-icon"
                  onPress={onCloseHandler}
                  style={style.headerButton}
                >
                  <Image resizeMode="cover" source={closeIcon} />
                </TouchableOpacity>
                {titleComponent}
              </View>
            </View>
            <SafeAreaView style={{ backgroundColor: bodyBackgroundColor }}>
              <View
                style={[
                  style.childrenContainer,
                  {
                    ...(contentStyle as object),
                    backgroundColor: bodyBackgroundColor,
                  },
                ]}
                onLayout={onLayoutBodyHandler}
              >
                {children}
                <ActionsBottomSheet buttons={buttons} />
              </View>
            </SafeAreaView>
          </View>
        </Animated.View>
      </Modal>
    </View>
  );
};

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    row: { flexDirection: 'row' },
    content: {
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    titleContainer: {
      flex: 1,
      marginTop: 15,
    },
    title: {
      textAlign: 'left',
      color: theme.colors.content_primary,
    },
    childrenContainer: {
      padding: 25,
      flex: 1,
    },
    header: {
      borderTopLeftRadius: 14,
      borderTopRightRadius: 14,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingHorizontal: 25,
      paddingVertical: 25,
      borderBottomWidth: 0.3,
      borderBottomColor: theme.colors.inverse_content_secondary,
    },
    headerButton: {
      paddingTop: 15,
    },
    outside: {
      ...StyleSheet.absoluteFillObject,
      zIndex: 80,
      backgroundColor: 'rgba(0,0,0, 0.12)',
    },
    animateContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: '#fff',
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      overflow: 'hidden',
      shadowOffset: {
        height: -3,
        width: 0,
      },
      shadowColor: '#000',
      shadowOpacity: 0.24,
      shadowRadius: 4,
      elevation: 3,
    },
    rowReverse: { flexDirection: 'row-reverse' },
    headerIndicator: {
      width: 32,
      height: 4,
      alignItems: 'center',
      backgroundColor: theme.colors.inverse_content_secondary,
      borderRadius: 100,
    },
  });

export default BaseBottomSheet;
