import React from 'react';
import { View, Text, Button } from 'react-native';

const Page1 = ({ navigation }) => {
  return (
    <View>
      <Text>Bienvenue sur la Page 1</Text>
      <Button
        title="Aller à la Page 2"
        onPress={() => navigation.navigate('Page2')}
      />
    </View>
  );
};

export default Page1;
