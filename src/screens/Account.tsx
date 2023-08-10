import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Alert } from 'react-native';

import { TTabNavigation } from '../types/navigation.types';
import { ACCOUNT, HOME, } from '../constants/screens';
import Button from '../components/Button/Button';
import { useAppContext } from '../context/AppContext';


const Account = ({ navigation, }: NativeStackScreenProps<TTabNavigation, typeof ACCOUNT>) => {
    const { balancePoints } = useAppContext();

    const showConfirmationAlert = () => Alert.alert('¿Quieres cerrar tu sesión?', 'Recuerda que puedes volver a entrar a la app cuando quieras', [
        {
            text: 'Si, cerrar sesión',
            onPress: goToHome
        },
        {
            text: 'En otro momento',
            onPress: () => navigation.navigate(ACCOUNT)
        }
    ])

    const goToHome = () => navigation.navigate(HOME);

    return (
        <View>
            <Text testID='name'>Maria Florencia</Text>
            <Text testID="points">{balancePoints}</Text>

            <Text>Otras acciones</Text>
            <Button text='Cierra sesión' testID='end-session-button' onPress={showConfirmationAlert} variant='hyperlink' />
        </View>
    );
};

export default Account;
