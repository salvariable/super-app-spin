import React, { useState } from 'react';
import {
  ActivityIndicator,
  View,
  useWindowDimensions,
  StyleSheet,
  SectionList,
  SectionListData,
} from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';

import type { TOperationType, TTransaction } from '../types/data.types';

import TabBar from '../components/TabBar/TabBar';
import Text from '../components/Text/Text';
import TransactionItem from '../components/custom/TransactionItem';

import handleReferenceDay from '../helpers/handleReferenceDay';

import { useFetchTransactions } from '../hooks/useFetchTransactions';
import { INTER } from '../styles/custom';

const createListData = (data: TTransaction[]) => {
  const dates = new Set(data.map(transaction => transaction.date));

  const orderedDates = Array.from(dates).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime(),
  );

  let listData: SectionListData<TTransaction>[] = [];

  orderedDates.forEach(date => {
    const sectionData = data.filter(transaction => transaction.date === date);

    listData.push({
      title: date,
      data: sectionData,
    });
  });

  return listData;
};

const filterData = (data: TTransaction[], operation: TOperationType) => {
  return data.filter(transaction => transaction.operation === operation);
};

const MovementsList = ({
  testID,
  data,
}: {
  testID: string;
  data: SectionListData<TTransaction>[];
}) => {
  const renderItem = ({ item }: { item: TTransaction }) => (
    <TransactionItem transaction={item} />
  );

  return (
    <SectionList
      sections={data}
      testID={testID}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.sectionHeader}>
          <Text variant="small-body" style={styles.sectionTitle}>
            {handleReferenceDay(title)}
          </Text>
        </View>
      )}
    />
  );
};

const Transactions = () => {
  const { data, loading, error } = useFetchTransactions();

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'all', title: 'Todos' },
    { key: 'earned', title: 'Ganados' },
    { key: 'redeemed', title: 'Usados' },
  ]);

  return (
    <View style={styles.container} testID="transactions-container">
      {loading ? (
        <ActivityIndicator testID="loader" />
      ) : (
        <TabView
          testID="tabs"
          navigationState={{ index, routes }}
          style={styles.tabContainer}
          renderTabBar={props => <TabBar {...props} style={styles.tabBar} />}
          renderScene={SceneMap({
            all: () => (
              <MovementsList testID="tab-all" data={createListData(data)} />
            ),
            earned: () => (
              <MovementsList
                testID="tab-earned"
                data={createListData(filterData(data, 'earned'))}
              />
            ),
            redeemed: () => (
              <MovementsList
                testID="tab-redeemed"
                data={createListData(filterData(data, 'redeemed'))}
              />
            ),
          })}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
      )}
    </View>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  tabContainer: {
    backgroundColor: '#fff',
  },
  tabBar: {
    backgroundColor: '#fff',
  },
  sectionHeader: {
    backgroundColor: '#fff',
    padding: 16,
  },
  sectionTitle: {
    fontWeight: '600',
    fontFamily: INTER,
  },
});
