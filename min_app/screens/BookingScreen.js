import React from 'react';
import { View } from 'react-native';
import BookingForm from '../components/BookingForm';
import { GlobalStyles } from '../GlobalStyles';

export default function BookingScreen({ navigation, addBooking }) {
  const handleSubmit = (booking) => {
    addBooking(booking);
    navigation.goBack();
  };

  return (
    <View style={GlobalStyles.screenContainer}>
      <BookingForm onSubmit={handleSubmit} />
    </View>
  );
}