import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './src/screens/Home';
import { BENEFITS, CARDLIST, FEED, HOME, TRANSACTIONS, TRANSACTION_DETAILS } from './src/constants/screens';
import { NavigationContainer } from '@react-navigation/native';
import { TNavigation } from './src/types/navigation.types';
import { Benefits } from './src/screens/Benefits';
import { NavBar } from './src';
import { Transactions } from './src/screens/Transactions';
import { TransactionDetails } from './src/screens/TransactionDetails';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator<TNavigation>();

const BenefitsNavigation = () => (
    <Stack.Navigator>
        <Stack.Screen name={FEED} component={Benefits} />
        <Stack.Screen name={TRANSACTIONS} component={Transactions} />
        <Stack.Screen name={TRANSACTION_DETAILS} component={TransactionDetails} />
    </Stack.Navigator>
)

const TabNavigation = () => (
    <Tab.Navigator>
        <Tab.Screen name={HOME} component={Home} options={{
            tabBarLabel: "Home",
            tabBarTestID: 'tab-home',
        }} />
        <Tab.Screen name={BENEFITS} component={BenefitsNavigation} options={{
            tabBarLabel: "Beneficios",
            header: () => <NavBar variant='primary' title='Beneficios' />
        }} />
    </Tab.Navigator>
)

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
