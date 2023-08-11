import React, { useEffect } from 'react';
import { View, ActivityIndicator, FlatList, StyleSheet } from 'react-native';

import { useAppContext } from '../context/AppContext';

import Text from '../components/Text/Text';
import EntityItem from '../components/custom/EntityItem';

const SelectEntity = () => {
  const { fetchEntities, entities } = useAppContext();

  useEffect(() => {
    fetchEntities();
  }, []);

  return (
    <View style={styles.container}>
      {entities.length === 0 ? (
        <ActivityIndicator testID="loader" />
      ) : (
        <>
          <Text variant="content-one-regular" numberOfLines={2}>
            Elige la marca aliada en la que quieres usar tus puntos
          </Text>
          <FlatList
            testID="entities-list"
            data={entities}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <EntityItem entity={item} />}
          />
        </>
      )}
    </View>
  );
};

export default SelectEntity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
});
