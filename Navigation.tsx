import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import type {
  TStackBenefits,
  TTabNavigation,
} from './src/types/navigation.types';

import {
  ACCOUNT,
  BENEFITS,
  FEED,
  HOME,
  INPUT_BALANCE,
  REDEEM_CONFIRMATION,
  SELECT_ENTITY,
  TRANSACTIONS,
  TRANSACTION_DETAILS,
  WALLET,
} from './src/constants/screens';

import {
  Benefits,
  Home,
  InputBalance,
  RedeemConfirmation,
  SelectEntity,
  TransactionDetails,
  Transactions,
  Wallet,
} from './src/screens';

import Account from './src/screens/Account';

const Stack = createNativeStackNavigator<TStackBenefits>();

const Tab = createBottomTabNavigator<TTabNavigation>();

const BenefitsStack = () => (
  <Stack.Navigator initialRouteName={FEED}>
    <Stack.Screen
      name={FEED}
      component={Benefits}
      options={{
        headerTitle: 'Beneficios',
        headerShadowVisible: false,
      }}
    />
    <Stack.Screen
      name={TRANSACTIONS}
      component={Transactions}
      options={{
        headerTitle: 'Movimientos',
      }}
    />
    <Stack.Screen name={TRANSACTION_DETAILS} component={TransactionDetails} />
    <Stack.Screen
      name={SELECT_ENTITY}
      component={SelectEntity}
      options={{
        headerTitle: 'Cambia tus puntos',
        headerShadowVisible: false,
      }}
    />
    <Stack.Screen name={INPUT_BALANCE} component={InputBalance} />
    <Stack.Screen name={REDEEM_CONFIRMATION} component={RedeemConfirmation} />
  </Stack.Navigator>
);

const homeIcon = require('./src/assets/icons/home.png');
const homeFocusedIcon = require('./src/assets/icons/home_focused.png');
const benefitsIcon = require('./src/assets/icons/benefits.png');
const benefitsFocusedIcon = require('./src/assets/icons/benefits_focused.png');
const walletIcon = require('./src/assets/icons/wallet.png');
const accountIcon = require('./src/assets/icons/account.png');

const TabNavigation = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: { height: 76 },
    }}>
    <Tab.Screen
      name={HOME}
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarTestID: 'tab-home',
        tabBarIcon: ({ focused }) => {
          return <Image source={!focused ? homeIcon : homeFocusedIcon} />;
        },
      }}
    />
    <Tab.Screen
      name={BENEFITS}
      component={BenefitsStack}
      options={{
        tabBarLabel: 'Beneficios',
        tabBarIcon: ({ focused }) => {
          return (
            <Image source={!focused ? benefitsIcon : benefitsFocusedIcon} />
          );
        },
      }}
    />
    <Tab.Screen
      name={WALLET}
      component={Wallet}
      options={{
        tabBarLabel: 'Cartera',
        tabBarTestID: 'tab-wallet',
        tabBarIcon: () => {
          return <Image source={walletIcon} />;
        },
      }}
    />
    <Tab.Screen
      name={ACCOUNT}
      component={Account}
      options={{
        tabBarLabel: 'Cuenta',
        tabBarTestID: 'tab-account',
        tabBarIcon: () => {
          return <Image source={accountIcon} />;
        },
      }}
    />
  </Tab.Navigator>
);

const Navigation = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
