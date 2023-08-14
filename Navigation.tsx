import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
  Account,
  Benefits,
  Home,
  InputBalance,
  RedeemConfirmation,
  SelectEntity,
  TransactionDetails,
  Transactions,
  Wallet,
} from './src/screens';

import Header from './src/components/custom/Header';
import { ColorType } from './src/styles/types';

const Stack = createStackNavigator<TStackBenefits>();

const Tab = createBottomTabNavigator<TTabNavigation>();

const BenefitsStack = () => (
  <Stack.Navigator initialRouteName={FEED}>
    <Stack.Screen
      name={FEED}
      component={Benefits}
      options={{
        header: () => <Header title="Beneficios" canGoBack={false} />,
      }}
    />
    <Stack.Screen
      name={TRANSACTIONS}
      component={Transactions}
      options={{
        header: () => <Header title="Movimientos" />,
      }}
    />
    <Stack.Screen
      name={TRANSACTION_DETAILS}
      component={TransactionDetails}
      options={{
        header: () => <Header title="Detalles del movimiento" />,
      }}
    />
    <Stack.Screen
      name={SELECT_ENTITY}
      component={SelectEntity}
      options={{
        header: () => <Header title="Cambia tus puntos" />,
      }}
    />
    <Stack.Screen name={INPUT_BALANCE} component={InputBalance} options={{
      header: () => <Header title="Cambia tus puntos" />,
    }} />
    <Stack.Screen name={REDEEM_CONFIRMATION} component={RedeemConfirmation} options={{
      headerShown: false
    }} />
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
    initialRouteName={HOME}
    detachInactiveScreens={false}
    screenOptions={{
      tabBarStyle: { height: 76 },
      tabBarLabelStyle: {
        fontSize: 12,
        lineHeight: 16,
        color: '#000',
      },
      tabBarActiveTintColor: '#000',
      tabBarInactiveTintColor: '#69698b',
      tabBarItemStyle: {
        paddingVertical: 14,
        justifyContent: 'center',
      },
    }}>
    <Tab.Screen
      name={HOME}
      component={Home}
      options={{
        headerShown: false,
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
        headerShown: false,
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
        headerShown: false,
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
        header: () => <Header title="Cuenta" canGoBack={false} />,
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
