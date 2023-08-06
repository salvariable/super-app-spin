import React from 'react';
import {
  StyleSheet,
  View,
  StyleProp,
  ImageStyle,
  ViewStyle,
  Text,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from '../../atoms/IconButton/IconButton';
import DeviceInfo from 'react-native-device-info';

interface PrimaryNavBarProps {
  variant?: string;
  testID?: string;
  leftSection?: JSX.Element;
  iconOnPress?: () => void;
  iconPath?: string;
  iconTestId?: string;
  iconStyle?: StyleProp<ImageStyle>;
  navBarStyle?: StyleProp<ViewStyle>;
  navBarTestId?: string;
  title?: string;
  children?: JSX.Element;
}
function PrimaryNavBar({
  leftSection,
  iconOnPress,
  iconTestId,
  navBarStyle,
  navBarTestId,
  title,
  children,
}: PrimaryNavBarProps) {
  const hasDynamicIsland = DeviceInfo.hasDynamicIsland();

  return (
    <SafeAreaView
      style={[
        styles.safeAreaContainer,
        hasDynamicIsland &&
          styles.safeAreaContainerWithDynamicIsland &&
          styles.safeAreaContainer,
      ]}
    >
      <StatusBar barStyle="dark-content" />
      <View
        style={navBarStyle ? navBarStyle : styles.container}
        testID={navBarTestId}
      >
        <View style={styles.sectionContainer}>{leftSection}</View>
        <View style={styles.titleContainer}>
          {children ? (
            children
          ) : (
            <View style={styles.titleContainer}>
              <Text style={styles.text}>{title ? title : 'Home'}</Text>
            </View>
          )}
        </View>
        <View style={styles.sectionContainer}>
          <Icon iconOnPress={iconOnPress} iconTestId={iconTestId} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: 'white',
  },
  safeAreaContainerWithDynamicIsland: {
    marginTop: 59,
  },
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: 56,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    color: '#080764',
  },
  image: { width: 30, height: 30 },
  titleContainer: {
    justifyContent: 'center',
    flex: 2,
    alignItems: 'center',
  },
  sectionContainer: { flex: 1, margin: 5 },
  iconPressable: { marginRight: 40, padding: 10 },
});

export default PrimaryNavBar;
