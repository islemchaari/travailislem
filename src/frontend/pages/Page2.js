import React from 'react';
import { View, Text, Button } from 'react-native';

const Page2 = ({ navigation }) => {
  return (
    <View>
      <Text>Bienvenue sur la Page 2</Text>
      <Button
        title="Retour à la Page 1"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default Page2;
