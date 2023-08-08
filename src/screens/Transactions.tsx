import React, { useState } from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';

import type { TOperationType, TTransaction } from '../types/data.types';

import TabBar from '../components/TabBar/TabBar';

import { useFetchTransactions } from '../hooks/useFetchTransactions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TRANSACTION_DETAILS } from '../constants/screens';
import { TStackBenefits } from '../types/navigation.types';

type Props = {};

const filterData = (data: TTransaction[], operation: TOperationType) => {
  return data.filter(transaction => transaction.operation === operation);
};

const MovementsList = ({
  testID,
  data,
}: {
  testID: string;
  data: TTransaction[];
}) => {
  const navigation = useNavigation<NavigationProp<TStackBenefits>>();

  const goToDetails = (transaction: TTransaction) =>
    navigation.navigate(TRANSACTION_DETAILS, {
      transaction,
    });

  return (
    <FlatList
      data={data}
      testID={testID}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => goToDetails(item)}>
          <Text>{item.entity}</Text>
          <Text>{item.date}</Text>
          <Text>{item.points}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const Transactions = (props: Props) => {
  const { data, loading, error } = useFetchTransactions();

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'all', title: 'Todos' },
    { key: 'earned', title: 'Ganados' },
    { key: 'redeemed', title: 'Usados' },
  ]);

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <ActivityIndicator testID="loader" />
      ) : (
        <TabView
          navigationState={{ index, routes }}
          renderScene={SceneMap({
            all: () => <MovementsList testID="tab-all" data={data} />,
            earned: () => (
              <MovementsList
                testID="tab-earned"
                data={filterData(data, 'earned')}
              />
            ),
            redeemed: () => (
              <MovementsList
                testID="tab-redeemed"
                data={filterData(data, 'redeemed')}
              />
            ),
          })}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width, height: layout.height }}
        />
      )}
    </View>
  );
};

export default Transactions;
