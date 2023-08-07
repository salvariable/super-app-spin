# Super App Spin 

Project by:
- Eduardo Viscencio
- Salvador Bolaños

# Concept Sections

### Home / Loyalty
    Scrollview with promotions and a points header.
### Movements
    FlatList with a set of transactions
### Movements Detail / Ticket
    Transaction details:
        - company name
        - earned points 
        - amount
        - transaction date 
        - start date
        - id
### Redeem points
    1. List with partner brands to select from.
    2. Layout mentions user's available points and its translation to currency
    3. Depending on user's points, different layout flows are available:
        - minimum allowed by partner brand: requires currency input 
        - minimum allowed and less than 1000 points: requires currency input 
        - more than 1000 points: displays two amount buttons and an optional currency input
        - more than 10,000 points: displays four amount buttons and an optional currency input
    4. On continue, a toast is showed and a confirmation screen is displayed, containing:
        - certificate number
        - points redeemed
        - points currency value
        - transaction date
        - expiration date
        - transaction id
    5. Info modal is available when text button under certificate number is pressed
    Note: text input contains rules to avoid user from redeeming maximum allowed in currency

### Profile
    - full name
    - available points
    - avatar
    - end session button

## Requirements

- Fork this repo.
- Clone this repo.
- Run `nvm use` to use the node version specified in the `.nvmrc` file.

```bash
nvm use
```

- Install the dependencies.

```bash
yarn
```

- Start the project.

```bash
yarn run ios
yarn run android
```

- Start db.json

```bash
yarn run json-server
```

## Example

[Figma Super App Flow](https://www.figma.com/file/7vNlhvWCFxpILCCh93wp9P/Super-App--Flow?type=design&node-id=7622-210762&mode=design&t=KjbcAvlSwGql8QRu-0)
