# PaymentCard

Un componente de tarjetas de pago.

## API

```js
    frontCard: {
      testID?: string;
      ownerName?: string;
      cardNumber: string;
      onChangeCardNumber: (newCardNumber: string) => void;
      maxCardNumberLenght: number
      hiddenNumbers?: number;
      toggleSwitch?: (value: boolean) => void;
      toggleActive?: boolean;
    };
    header: {
      testID?: string;
      alias: string | undefined;
      brandName: string | undefined;
      brandIcon?: ImageSourcePropType | undefined;
    };
    backCard: {
      testID?: string;
      barcodeValue: string;
      barcodeFormat: BarcodeFormat;
      customHeader?: React.ReactNode;
    };
    textStyle?: TextStyle;
    flip?: boolean;
    gradient: Gradient;
    style?: ViewStyle;

```

## Ejemplo de uso

```js
import React, { useState } from 'react';
import { View } from 'react-native';
import { PaymentCard, Button } from '@digitaltitransversal/tr_superapp_theme';

function PaymentCardScreen() {
  const [flipped, setFlipped] = useState(false);

  const flip = () => {
    setFlipped(!flipped);
  };

  return (
        <View>
          <PaymentCard
            header={{
              alias: 'Tarjeta de credito',
              brandName: 'BBVA',
              brandIcon: {
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Oxxo_Logo.svg/1200px-Oxxo_Logo.svg.png',
              },
            }}
            frontCard={{
              hiddenNumbers: 4,
              cardNumber: '4024007189386823',
              ownerName: 'David',
              toggleActive: true,
              toggleSwitch: (value: boolean) => {
                console.log('switched', value);
              },
            }}
            backCard={{ barcodeValue: '12345', barcodeFormat: 'CODE128' }}
            flip={flipped}
            gradient={{
              enabled: { left: '#2B1766', center: '#704AC1', right: '#2B1766' },
              disabled: {
                left: '#9FAABA',
                center: '#C9D0DB',
                right: '#9FAABA',
              },
            }}
          />
        </View>
        <Button onPress={() => flip()} text="Flip" />
  );
}

export default PaymentCardScreen;

```

## Diseño

![PaymentCard](/docs/images/paymentCard.png)
