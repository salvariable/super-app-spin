import React from 'react';
import { View, Alert, StyleSheet, Image } from 'react-native';

import { TTabNavigation } from '../types/navigation.types';
import { ACCOUNT, HOME, } from '../constants/screens';
import Button from '../components/Button/Button';
import { useAppContext } from '../context/AppContext';
import MyPoints from '../components/custom/MyPoints';
import { StackScreenProps } from '@react-navigation/stack';
import Text from '../components/Text/Text';
import Tag from '../components/atoms/Tag';
import { IMAGES } from '../constants/values';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Account = ({ navigation, }: StackScreenProps<TTabNavigation, typeof ACCOUNT>) => {
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
        <View style={styles.container}>
            {/* <Text testID='name'>Maria Florencia</Text> */}

            <View style={styles.header}>
                <View>
                    <Text variant='headline-medium'
                        testID='name'
                        style={styles.title}
                    >
                        Maria Florencia
                    </Text>
                    <Tag
                        text={`${balancePoints} puntos`}
                        variant="points"
                    />
                </View>

                <Image source={require('../assets/Images/spin.png')} style={styles.avatar} />
            </View>

            <Text variant='default-body-bold'
                testID='label-other'
                style={styles.label}
            >
                Otras acciones:
            </Text>
            <TouchableOpacity style={styles.button} onPress={showConfirmationAlert}>
                <Image source={require('../assets/icons/signout.png')} />
                <Text variant='small-body'
                    testID='label-other'
                    style={styles.label}
                >
                    Cerrar sesión
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Account;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24
    },
    title: {
        marginVertical: 8,
    },
    avatar: {
        height: 120,
        width: 120
    },
    label: {
        marginVertical: 16,
        marginLeft: 8
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'silver'
    }
})
