import React from 'react';
import { View, Text } from 'react-native';
import { GlobalStyles } from '../GlobalStyles';
import ButtonComponent from './ButtonComponent';

export default function BookingItem({ booking, onCancel }) {
  return (
    <View style={GlobalStyles.bookingItem}>
      <View style={{ flexShrink: 1 }}>
        <Text style={GlobalStyles.bookingItemText}>
          {booking.dato} – {booking.valgtFA}
        </Text>
        {booking.kommentar ? (
          <Text style={GlobalStyles.bookingItemComment}>{booking.kommentar}</Text>
        ) : null}
      </View>
      <ButtonComponent title="Annullér" variant="secondary" onPress={() => onCancel(booking.id)} />
    </View>
  );
}