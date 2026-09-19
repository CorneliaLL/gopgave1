import React from 'react';
import { View, FlatList, Text } from 'react-native';
import BookingItem from '../components/BookingItem';
import { GlobalStyles } from '../GlobalStyles';

export default function MyBookingsScreen({ bookinger, removeBooking }) {
  return (
    <View style={GlobalStyles.screenContainer}>
      <Text style={GlobalStyles.sectionTitle}>Mine bookinger</Text>
      {bookinger.length === 0 ? (
        <Text>Du har ingen bookinger endnu.</Text>
      ) : (
        <FlatList
          data={bookinger}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <BookingItem booking={item} onCancel={removeBooking} />}
        />
      )}
    </View>
  );
}