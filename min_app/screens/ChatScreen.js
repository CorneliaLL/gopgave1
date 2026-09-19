import React from 'react';
import { View, FlatList, Text, Pressable, Alert } from 'react-native';
import { FASHION_ADVISORS } from '../data/const';
import { GlobalStyles } from '../GlobalStyles';

export default function ChatScreen() {
  return (
    <View style={GlobalStyles.screenContainer}>
      <Text style={GlobalStyles.sectionTitle}>Chats</Text>
      <FlatList
        data={FASHION_ADVISORS}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Pressable
            style={GlobalStyles.optionCard}
            onPress={() => Alert.alert('Vent venligst et øjeblik.')}
          >
            <Text style={GlobalStyles.optionCardText}>{item}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}