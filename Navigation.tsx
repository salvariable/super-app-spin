import React from 'react';
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
} from './src/screens';

import { NavBar } from './src';

const Stack = createNativeStackNavigator<TStackBenefits>();

const Tab = createBottomTabNavigator<TTabNavigation>();

const BenefitsStack = () => (
  <Stack.Navigator initialRouteName={FEED}>
    <Stack.Screen name={FEED} component={Benefits} />
    <Stack.Screen
      name={TRANSACTIONS}
      component={Transactions}
      options={{
        headerTitle: 'Movimientos',
      }}
    />
    <Stack.Screen name={TRANSACTION_DETAILS} component={TransactionDetails} />
    <Stack.Screen name={SELECT_ENTITY} component={SelectEntity} />
    <Stack.Screen name={INPUT_BALANCE} component={InputBalance} />
    <Stack.Screen name={REDEEM_CONFIRMATION} component={RedeemConfirmation} />
  </Stack.Navigator>
);

const TabNavigation = () => (
  <Tab.Navigator screenOptions={{
    headerShown: false
  }}>
    <Tab.Screen
      name={HOME}
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarTestID: 'tab-home',
      }}
    />
    <Tab.Screen
      name={BENEFITS}
      component={BenefitsStack}
      options={{
        tabBarLabel: 'Beneficios',
      }}
    />
    <Tab.Screen
      name={WALLET}
      component={Home}
      options={{
        tabBarLabel: 'Cartera',
        tabBarTestID: 'tab-wallet',

      }}
    />
    <Tab.Screen
      name={ACCOUNT}
      component={Home}
      options={{
        tabBarLabel: 'Cuenta',
        tabBarTestID: 'tab-account',

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
