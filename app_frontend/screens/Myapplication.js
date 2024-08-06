import React from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
const jobData = [
  { id: '1', title: 'React Native developer', status: 'approved' },
  { id: '2', title: 'Vue Developer Position', status: 'rejected' },
  { id: '3', title: 'Sales', status: 'request pending' },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'approved':
      return '#4CAF50'; // Green color for approved status
    case 'rejected':
      return '#F44336'; // Red color for rejected status
    case 'request pending':
      return '#FFC107'; // Yellow color for request pending status
    default:
      return '#000000'; // Black color for unknown status
  }
};

const JobCard = ({ title, status }) => {
  const cardStyle = {
    backgroundColor: getStatusColor(status),
  };

  return (
    <View style={[styles.card, cardStyle]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.status}>{status}</Text>
    </View>
  );
};

const Settings = () => {
  const renderItem = ({ item }) => (
    <JobCard title={item.title} status={item.status} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={jobData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      {/* <Icon name='manage_accounts' size={30}/> */}
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000000',
  },
  status: {
    fontSize: 16,
    color: '#000000',
  },
});