import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { FASHION_ADVISORS } from '../data/const';
import { GlobalStyles } from '../GlobalStyles';
import ButtonComponent from './ButtonComponent';

export default function BookingForm({ onSubmit }) {
  const [dato, setDato] = useState('');
  const [valgtFA, setValgtFA] = useState(FASHION_ADVISORS[0]);
  const [kommentar, setKommentar] = useState('');

  const handleSubmit = () => {
    const booking = {
      id: Date.now().toString(),
      dato,
      valgtFA,
      kommentar,
    };
    onSubmit(booking);
  };

  return (
    <View style={GlobalStyles.formContainer}>
      <Text style={GlobalStyles.inputLabel}>Dato</Text>
      <TextInput
        style={GlobalStyles.textInput}
        placeholder="dag/måned"
        value={dato}
        onChangeText={setDato}
      />

      <Text style={GlobalStyles.inputLabel}>Vælg Fashion Advisor</Text>
      <View style={GlobalStyles.faOptionsRow}>
        {FASHION_ADVISORS.map((fa) => (
          <ButtonComponent
            key={fa}
            title={fa}
            variant={valgtFA === fa ? 'primary' : 'secondary'}
            onPress={() => setValgtFA(fa)}
          />
        ))}
      </View>

      <Text style={GlobalStyles.inputLabel}>Kommentar</Text>
      <TextInput
        style={GlobalStyles.textInput}
        placeholder="Kommentar til din FA..."
        value={kommentar}
        onChangeText={setKommentar}
        multiline
      />

      <View style={{ marginTop: 20 }}>
        <ButtonComponent title="Bekræft booking" onPress={handleSubmit} />
      </View>
    </View>
  );
}