import React, { useState, useCallback, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import Axios from 'axios';
import { Alert } from 'react-native';

export default function SwipeRefresh() {
  const [refreshing, setRefreshing] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get('https://randomuser.me/api/?results=5').then((res) => {
      setUsers(res.data.results);
    });
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    Axios.get('https://randomuser.me/api/?results=5').then((res) => {
      setUsers(res.data.results);
      setRefreshing(false);
    });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {users.map((user) => (
        <TouchableOpacity
          style={styles.userCard}
          onPress={() => {
            Alert.alert(
              `${user.name.first} ${user.name.last}`,
              `You can call me at ${user.phone}`
            );
          }}
        >
          <Image
            style={styles.userImage}
            source={{ uri: user.picture?.large }}
          />
          <View style={styles.userCardRight}>
            <Text
              style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}
            >{`${user.name.first} ${user.name.last}`}</Text>
            <Text style={{ color: '#fff' }}>{`${user?.phone}`}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 10,
  },
  userCard: {
    backgroundColor: '#2f3542',
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 10,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  userCardRight: {
    paddingHorizontal: 10,
  },
});