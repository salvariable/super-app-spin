# NavBar

NavBar es un componente que tiene como objetivo ayudar en la navegación de la app. Cuenta actualmente con
2 variantes, una con titulo e icono llamada Default y otra con titulo icono y otro componente agregable
llamada Primary. Debe entregarse como parametro de la opcion Header en la correspondiente Screen donde se
quiera implementar.

## Update en el Default variant:
Adicionalmente, la variante `default` contendrá una subVariante de tipo
`home-page` que recibe un título y a la derecha contendrá hasta dos íconos
`main-page` que recibe un título y a cada lado contendrá un ícono
`secondary-page` que recibe un título y del lado izquierdo contendrá un chevron cuyo atributo onPress será `iconOnPress`, y a la derecha después del título podrá contener hasta dos íconos.

Consideraciones:
- Usar como parámetro del `leftIconName` ó `rightIconName` los permitidos en la lista de IconList, que está en https://digitalfemsa.atlassian.net/wiki/spaces/SAPP/pages/331579442/Uso+de+Icon+fonts


## API

```
  variant: keyof typeof NavBarVariant;
  testID?: string;
  component?: JSX.Element;
  iconOnPress?: () => void;
  navBarTestId?: string;
  iconPath?: string;
  iconTestId?: string;
  iconStyle?: StyleProp<ImageStyle>;
  navBarStyle?: StyleProp<ViewStyle>;
  title: string;
```
## API DEFAULT VARIANT
```
DefaultNavBarProps {
  testID?: string;
  /* OnPress para el chevron **/
  iconOnPress?: () => void;
  iconPath?: string;
  iconTestId?: string;
  iconStyle?: StyleProp<ImageStyle>;
   /* Estilos del container, por default el navbar es transparente **/
  navBarStyle?: StyleProp<ViewStyle>;
  navBarTestId?: string;
  title?: string;
  children?: JSX.Element;
  /* New navbar variants **/
   /* Nuevas variantes del default navbar **/
  navbarDefaultVariant?: keyof typeof DefaultNavBarVariants;
   /* Ícono de la izquierda, admite los de la lista anterior **/
  leftIconName?: string;
   /* Ícono de la derecha, admite los de la lista anterior **/
  rightIconName?: string;
   /* Función del Ícono de la izquierda, admite los de la lista anterior **/
  leftIconFn?: () => void;
  /* Función del Ícono de la derecha, admite los de la lista anterior **/
  rightIconFn?: () => void;
  /* Color del status bar en Android **/
  statusBarColor?: ColorValue | undefined;
  /* Estilos del safeArea, por default el navbar es transparente **/
  safeAreaContainerStyle?: StyleProp<ViewStyle>;
  /* Estilos del título, por default el textColor es content primary **/
  titleStyle?: StyleProp<TextStyle>;
    /* Estilos del iconTypography, por default el tamaño es de 24 **/
  iconTypographyStyle?: StyleProp<TextStyle>;
   /* Estilos del chevron icon **/
  chevronIconStyle?: StyleProp<TextStyle>;
   /* Render del badge  **/
  renderBadge?: boolean;
}
```
## Ejemplo de uso

```ts
import * as React from 'react';
import { ThemeProvider, NavBar } from '@digitaltitransversal/tr_superapp_theme';
import { Button } from 'react-native';
import {
  Container,
  createNavigator,
} from '@digitaltitransversal/tr_superapp_core';
import NavBarScreen from './NavBarScreen';
const { Navigator, Screen } = createNavigator();

export default function NavBarExample() {
  return (
    <Container>
      <Navigator>
        // NabBar Primary sending title via props
        <Screen
          name="NavBarScreenPrimary"
          component={NavBarScreenPrimary}
          options={{
            header: (props: NativeStackHeaderProps) => (
              <NavBar
                variant={'primary'}
                title={'Primary'}
                leftSection={
                  <Button
                    title={'default'}
                    onPress={() =>
                      props.navigation.navigate('NavBarScreenDefault')
                    }
                  />
                }
                iconOnPress={() => props.navigation.navigate('Dashboard')}
              />
            ),
          }}
        />
        // NabBar Default sending title via children component
        <Screen
          name="NavBarScreenDefault"
          component={NavBarScreenDefault}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            header: (props: NativeStackHeaderProps) => (
              <NavBar
                variant={'default'}
                iconOnPress={() => props.navigation.navigate('Dashboard')}
              >
                <Text variant={'jumbo-one'}> Jumbo </Text>
              </NavBar>
            ),
          }}
        />
        // Navbar default main page variant
         <Screen
        name="MainPageNavbar"
        component={MainNavbarDefaultScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          header: () => (
            <NavBar
              navbarDefaultVariant={'main-page'}
              rightIconName={'bell'}
              leftIconName={'lens'}
              title={'¡Hola, John Doe!'}
              variant={'default'}
              leftIconFn={() => console.log('Left icon pressed')}
              rightIconFn={() => console.log('Right icon pressed')}
              safeAreaContainerStyle={safeAreaContainerStyle}
            />
          ),
        }}
      />
      </Navigator>
    </Container>
  );
}
```

## Diseño

![NavBar](/docs/images/navBar.png)
