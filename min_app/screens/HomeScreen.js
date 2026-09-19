import React from 'react';
import { View, Text } from 'react-native';
import OptionCard from '../components/OptionCard';
import { GlobalStyles } from '../GlobalStyles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={GlobalStyles.screenContainer}>
      <Text style={GlobalStyles.sectionTitle}>Allure</Text>

      <OptionCard title="Book tid" onPress={() => navigation.navigate('Book tid')} />
      <OptionCard title="Se nyeste kollektioner" onPress={() => {}} />
      <OptionCard title="Info om arrangementer" onPress={() => {}} />
      <OptionCard title="Allure's anbefalinger" onPress={() => {}} />
    </View>
  );
}