# TextInput

Un componente que permite a los usuarios ingresar información.

## API

```js
/** kind of text inputs */
variant: 'default' | 'numeric' | 'password' | 'mask' | 'email';
/** kind of mask*/
maskType?: string;
/** Text input styles */
style?: StyleProp<ViewStyle>;
/** string for testing */
testID?: string;
/** regex's used to validate input */
pattern?: string | string[];
/** Component rendered in the right side of the input */
rightSection?: React.ReactElement;
/** style of right component */
rightSectionStyle?: StyleProp<ViewStyle>;
/** Component rendered in the left side of the input */
leftSection?: React.ReactElement;
/** style of left component */
leftSectionStyle?: StyleProp<ViewStyle>;
/** customized color styles for input */
inputColors?: {
  primary: string;
  secondary: string;
  backgroundLine: string;
};
/** callback when input is valid */
onValidation?: (isValid: boolean[]) => void;
/** label over the input that goes up when focus */
label?: string;
/** text on input when no data on it */
placeHolder: string;
/** message to show on bottom when error */
error?: string;
/** type of text input*/
numericInput?: boolean;
/** used on password input to hide the entered characters*/
secureInput?: boolean;
/** variable that handle the value */
value: string;
/** max number of characters allowed on the input*/
maxLength?: number;
/** max number of characters allowed on the input*/
activeColor?: string;
/** callback when value change*/
onChangeText: (text: string) => void;
/** callback when blur*/
onEditFinish?: () => void;
/** emails domains helppers buttons*/
domainList?: string[];
onTouchStart?: ((event: GestureResponderEvent) => void) | undefined;
/** enable or disable input*/
editable?: boolean;
/** message on bottom when */
bottomMessage?: string;
/** callback when user pressed submit button on keyboard */
onSubmitEditing?: () => void;
/** this prop is necessary to show our InputAccessoryView */
inputAccessoryViewID?: string;
/** label for the input accessory button */
inputAccessoryLabel?: string;
/** callback when the user presses the input accessory button, if it doesn't provide just dismiss the keyboard */
inputAccessoryAction?: () => void;
```

## Ejemplo de uso

```js
import React, { useRef, useState } from 'react';
import { TextInput } from '@digitaltitransversal/tr_superapp_theme';

export default function App() {
  const inputRef = useRef<TextInput>(null);
  const [numericTextInput, setNumericTextInput] = useState('');
  const [isValid, setIsValid] = useState([]);

  //inputRef - provide a list of methods we can use for text input component
  // https://reactnative.dev/docs/textinput#methods
  useEffect(() => {
    // activating textInput when screen is mounted
    inputRef.current?.focus();
  }, []);

  return (
    <TextInput
      ref={inputRef}
      variant="numeric"
      placeHolder="Número celular"
      maxLength={10}
      pattern={['(?=.*\\d)']}
      onValidation={setIsValid}
      value={numericTextInput}
      onChangeText={setNumericTextInput}
    />
  );
}
```

# Ejemplo phone, transparente y sección izquierda

```js
import React, { useState } from 'react';
import { Image } from 'react-native';
import { TextInput } from '@digitaltitransversal/tr_superapp_theme';

const flag = '../assets/bandera.png';

export default function App() {
  const [numericTextInput, setNumericTextInput] = useState('');
  const [isValid, setIsValid] = useState([]);

  const renderLeftSection = () => <Image source={require(flag)} />;
  const onSubmitEditing = () => {
    console.log('Editing submitted');
  };

  return (
    <TextInput
      variant="numeric"
      placeHolder="Número celular"
      label="Número celular"
      maxLength={10}
      pattern={['(?=.*\\d)']}
      onValidation={setIsValid}
      value={numericTextInput}
      onChangeText={setNumericTextInput}
      leftSection={renderLeftSection()}
      style={{
        backgroundColor: 'transparent',
        borderColor: theme.colors.BRAND_DEFAULT_LIGHT_100,
      }}
      inputColors={{
        primary: theme.colors.BRAND_DEFAULT_LIGHT_100, //placeholder
        secondary: theme.colors.BRAND_DEFAULT_LIGHT_200, //placeholder onBlur
        backgroundLine: '#4269e1',
        // color linea label. Debe ser igual al color de fondo para efecto de pseudo transparencia
      }}
      onSubmitEditing={onSubmitEditing}
    />
  );
}
```

# Ejemplo TextInput con InputAccessoryView

```js
import React, { useState } from 'react';
import { Image } from 'react-native';
import { TextInput } from '@digitaltitransversal/tr_superapp_theme';

export default function App() {
  const [textInput, setTextInput] = useState('');


  return (
    <TextInput
      placeHolder="Nombre"
      label="Nombre"
      value={textInput}
      onChangeText={setTextInput}
      leftSection={renderLeftSection()}
      style={{
        backgroundColor: 'transparent',
        borderColor: theme.colors.BRAND_DEFAULT_LIGHT_100,
      }}
      inputAccessoryViewID="textInput"
      inputAccessoryLabel="Listo"
      inputAccessoryAction={() => console.log('AccessoryView pressed')}
    />
  );
}
```

## Diseño

|               | ios / android                                    |
| ------------- | ------------------------------------------------ |
| con label     | ![inputBlur](/docs/images/inputBlur.png)         |
| label y focus | ![inputFocus](/docs/images/inputFocus.png)       |
| password      | ![inputPassword](/docs/images/inputPassword.png) |
| mask          | ![inputPassword](/docs/images/inputMask.png)     |
| email         | ![inputPassword](/docs/images/inputEmail.png)    |
| phone         | ![inputPhone](/docs/images/inputPhone.png)       |
| error         | ![inputPhone](/docs/images/inputError.png)       |
