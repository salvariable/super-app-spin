import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
  forwardRef,
  ForwardRefRenderFunction,
  PropsWithChildren,
  useImperativeHandle,
} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import BottomSheet, {
  BottomSheetProps,
  BottomSheetHandle,
  BottomSheetHandleProps,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import {ScrollView} from 'react-native-gesture-handler';

// import type {ThemeType} from '@digitaltitransversal/tr_superapp_theme';
import {ThemeType, useThemedStyles} from '../../..';
// import {useThemedStyles} from '@digitaltitransversal/tr_superapp_theme';

const closeIcon = require('../../../assets/bottom-sheet-close.png');
import Text from '../../Text/Text';

export interface BottomSheetV2Props {
  testID?: string;
  openHeightPercentage?: number;
  contentScrollEnabled?: boolean; // Only can be used when children is NOT FlatList
  snapPoints?: BottomSheetProps['snapPoints'];
  headerBackgroundColor?: string;
  bodyBackgroundColor?: string;
  title?: string;
  titleCentered?: boolean;
  closeIconEnabled?: boolean;
  closeIconPosition?: 'left' | 'right';
  contentStyle?: object;
  enablePanDownToClose?: boolean;

  onClose?: () => void;
}

export interface BottomSheetRef {
  expand: () => void;
  close: () => void;
  dismiss: () => void;
  collapse: () => void;
  snapToIndex: (index: number) => void;
  snapToPosition: () => void;
  forceClose: () => void;
}

const BottomSheetV2: ForwardRefRenderFunction<
  BottomSheet,
  PropsWithChildren<BottomSheetV2Props>
> = (
  {
    children,
    openHeightPercentage = 50, // % of the height of the parent view to open a bottom sheet (see snapPoints prop)
    headerBackgroundColor = '#FFF',
    bodyBackgroundColor = '#FFF',
    title = '',
    titleCentered = true,
    closeIconEnabled = true,
    closeIconPosition = 'right',
    contentStyle,
    enablePanDownToClose = true,
    contentScrollEnabled = false,

    onClose,
    ...props
  },
  ref: React.ForwardedRef<BottomSheet>,
) => {
  const [keyboardOpened, setKeyboardOpened] = useState<boolean>(false);
  const style = useThemedStyles(styles);

  const ContentComponent = contentScrollEnabled ? ScrollView : View;

  const bottomSheetRef = useRef<BottomSheet>(null);

  const points = useMemo(
    () => ['100%', `${openHeightPercentage}%`], // 100% snap point is used for opened keyboard
    [openHeightPercentage],
  );

  const onCloseHandler = useCallback(() => {
    Keyboard.dismiss(); // We need to manually dismiss keyboard when closing bottom sheet

    // Timeout needed for correct Keyboard handling
    setTimeout(() => {
      bottomSheetRef.current?.close();
    }, 500);

    onClose && onClose();
  }, [onClose]);

  const expand = () => {
    bottomSheetRef.current?.expand();
  };

  const close = () => {
    bottomSheetRef.current?.close();
  };

  const snapToIndex = (index: number) => {
    bottomSheetRef.current?.snapToIndex(index);
  };

  useImperativeHandle(ref, () => ({
    expand,
    close,
    snapToIndex,
    snapToPosition: () => null,
    collapse: () => null,
    forceClose: () => null,
  }));

  const renderHeader = (handleProps: BottomSheetHandleProps) => (
    <BottomSheetHandle
      {...handleProps}
      style={[
        headerBackgroundColor
          ? {
              backgroundColor: headerBackgroundColor,
              ...style.headerContainerWithBackground,
            }
          : null,
        style.headerContainer,
      ]}>
      <View style={[style.header]}>
        <View
          style={closeIconPosition === 'right' ? style.rowReverse : style.row}>
          {closeIconEnabled ? (
            <TouchableOpacity
              testID="close-icon"
              onPress={onCloseHandler}
              hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}
              style={[
                style.headerCloseButton,
                closeIconPosition === 'left'
                  ? style.headerCloseButtonLeft
                  : style.headerCloseButtonRight,
              ]}>
              <Image resizeMode="cover" source={closeIcon} />
            </TouchableOpacity>
          ) : null}

          <View
            style={[
              style.titleContainer,
              closeIconEnabled &&
                (closeIconPosition === 'left'
                  ? style.titleLeftPadding
                  : style.titleRightPadding),
              titleCentered && style.titleCentered,
            ]}>
            <Text variant="headline-medium" style={style.title}>
              {title}
            </Text>
          </View>
        </View>
      </View>
    </BottomSheetHandle>
  );

  const renderBackdrop = useCallback(
    (backdropProps: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...backdropProps}
        onPress={onCloseHandler}
        pressBehavior={'close'}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    [onCloseHandler],
  );

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardOpened(true);
    });

    const keyboardHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardOpened(false);
    });

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={points}
      enablePanDownToClose={keyboardOpened ? false : enablePanDownToClose}
      enableHandlePanningGesture={keyboardOpened ? false : true}
      enableContentPanningGesture={keyboardOpened ? false : true}
      handleComponent={renderHeader}
      handleStyle={{backgroundColor: headerBackgroundColor}}
      backdropComponent={renderBackdrop}
      keyboardBehavior="extend"
      {...props}>
      <View
        style={[
          style.contentContainer,
          {
            ...contentStyle,
            backgroundColor: bodyBackgroundColor,
          },
        ]}>
        <ContentComponent
          scrollEnabled={contentScrollEnabled}
          style={[style.content]}>
          {children}
        </ContentComponent>
      </View>
    </BottomSheet>
  );
};

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    content: {
      flex: 1,
    },
    contentContainer: {
      flex: 1,
      padding: 16,
    },
    headerContainer: {
      paddingBottom: 0,
      paddingHorizontal: 0,
    },
    headerContainerWithBackground: {
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
    },
    header: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 16,
      borderBottomWidth: 0.3,
      borderBottomColor: theme.colors.inverse_content_secondary,
    },

    headerCloseButton: {
      position: 'absolute',
      zIndex: 1000,
    },
    headerCloseButtonLeft: {
      paddingRight: 10,
    },
    headerCloseButtonRight: {
      paddingLeft: 10,
    },

    titleLeftPadding: {
      paddingLeft: 30,
    },
    titleRightPadding: {
      paddingRight: 30,
    },
    titleCentered: {
      paddingHorizontal: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleContainer: {
      flex: 1,
    },
    title: {
      textAlign: 'left',
      color: theme.colors.content_primary,
    },
    row: {flexDirection: 'row'},
    rowReverse: {flexDirection: 'row-reverse'},
  });

export default forwardRef(BottomSheetV2);
