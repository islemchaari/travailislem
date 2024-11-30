import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';

const Page1 = ({ navigation }) => {
  const [selectedDisease, setSelectedDisease] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNext = () => {
    if (!selectedDisease) {
      setErrorMessage('You must click on a box');
    } else {
      setErrorMessage('');
      if (selectedDisease === 'noDisease') {
        navigation.navigate('NoDisease');
      } else {
        navigation.navigate('Page2', { selectedDisease });
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Profile</Text>
      <Text style={styles.instructions}>
        In order to find your Duo and create your community, please tell us if you have a disease
      </Text>

      <Image source={require('../assets/pill_image.png')} style={styles.pillImage} />

      <TouchableOpacity
        style={[styles.option, selectedDisease === 'noDisease' && styles.selectedOption]}
        onPress={() => setSelectedDisease('noDisease')}
      >
        <Text style={styles.optionText}>I have no disease</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, selectedDisease === 'rareDisease' && styles.selectedOption]}
        onPress={() => setSelectedDisease('rareDisease')}
      >
        <Text style={styles.optionText}>I have a rare disease</Text>
      </TouchableOpacity>
      <Text style={styles.descriptionText}>
        A rare disease is generally considered to be a disease that affects fewer than 200,000 people in the United States at any given time. There are more than 6,800 rare diseases.
      </Text>

      <TouchableOpacity
        style={[styles.option, selectedDisease === 'cancer' && styles.selectedOption]}
        onPress={() => setSelectedDisease('cancer')}
      >
        <Text style={styles.optionText}>I have cancer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, selectedDisease === 'metastasisCancer' && styles.selectedOption]}
        onPress={() => setSelectedDisease('metastasisCancer')}
      >
        <Text style={styles.optionText}>I have a metastasis cancer</Text>
      </TouchableOpacity>
      <Text style={styles.descriptionText}>
        A metastasis cancer happens when cancer cells separate from the primary tumour and spread to other parts of the body.
      </Text>

      <TouchableOpacity
        style={[styles.option, selectedDisease === 'curedCancer' && styles.selectedOption]}
        onPress={() => setSelectedDisease('curedCancer')}
      >
        <Text style={styles.optionText}>I had cancer and I'm cured</Text>
      </TouchableOpacity>

      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      <TouchableOpacity
        style={styles.nextButton}
        onPress={handleNext}
      >
        <Text style={styles.nextText}>Next - Go to step 4</Text>
      </TouchableOpacity>

      {/* Ajouter un lien vers la page ForgotPasswordScreen */}
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
        <Text style={styles.loginText}>Forgot Password? Click here</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#f37d4a',
  },
  instructions: {
    fontSize: 16,
    marginBottom: 30,
    color: '#000',
  },
  option: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    marginBottom: 15,
    borderRadius: 5,
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },
  selectedOption: {
    backgroundColor: '#e6e6e6',
  },
  descriptionText: {
    fontSize: 14,
    color: '#555',
    marginLeft: 20,
    marginBottom: 10,
  },
  nextButton: {
    backgroundColor: '#f37d4a',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  nextText: {
    fontSize: 18,
    color: '#fff',
  },
  loginText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#f37d4a',
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  pillImage: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginVertical: 20,
  },
});

export default Page1;
