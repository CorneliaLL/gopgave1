import React from 'react';
import { Pressable, Text } from 'react-native';
import { GlobalStyles } from '../GlobalStyles';

export default function OptionCard({ title, onPress }) {
  return (
    <Pressable style={GlobalStyles.optionCard} onPress={onPress}>
      <Text style={GlobalStyles.optionCardText}>{title}</Text>
    </Pressable>
  );
}