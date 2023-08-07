# Checkbox

Un componente que permite hacer una selección binaria.

## API

```js
labelText: string;

selected?: boolean;

disabled?: boolean;

onCheck?: () => void;

/**
* onLabelPress funciona al presionar en el texto.
* No cambia el estado de checked pero sirve en caso de necesitar hacer una acción extra.
**/
onLabelPress?: () => void;

testID?: string;
```

## Ejemplo de uso

```js
import * as React from 'react';
import { Checkbox } from '@digitaltitransversal/tr_superapp_theme';

export default function Checkbox() {
  const [isSelected, setIsSelected] = useState(false);

  const onLabelPress = () => {
    Alert.alert('Label clicked');
  };

  return (
    <Checkbox
      labelText="Label de ejemplo"
      selected={isSelectedOne}
      onCheck={() => setIsSelected(!isSelectedOne)}
      onLabelPress={onLabelPress}
    />
  );
}
```

## Diseño

![Checkbox](/docs/images/checkbox.png)
