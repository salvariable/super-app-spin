import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import type {
  TStackBenefits,
  TTabNavigation,
} from './src/types/navigation.types';

import {
  BENEFITS,
  FEED,
  HOME,
  INPUT_BALANCE,
  REDEEM_CONFIRMATION,
  SELECT_ENTITY,
  TRANSACTIONS,
  TRANSACTION_DETAILS,
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
  <Stack.Navigator>
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
  <Tab.Navigator>
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
        header: () => <NavBar variant="primary" title="Beneficios" />,
        // headerShown: false,
      }}
    />
  </Tab.Navigator>
);

const Navigation = () => {
  // Pantalla Home
  // Stack Transactions
  // Stack Wallet
  // Pantalla Perfil
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
