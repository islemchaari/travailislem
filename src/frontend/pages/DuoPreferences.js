import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Pour les icônes
import { useNavigation } from '@react-navigation/native'; // Importer useNavigation

const DuoPreferences = () => {
  const [preferences, setPreferences] = useState({
    acceptDuo: null,
    sameCountry: null,
    sameDisease: null,
    similarAge: null,
  });

  const navigation = useNavigation(); // Récupérer l'objet de navigation

  const handleSelection = (key, value) => {
    setPreferences({ ...preferences, [key]: value });
  };

  // Fonction pour naviguer vers DuoSuggestions
  const handleSeeResults = () => {
    navigation.navigate('DuoSuggestions'); // Navigation vers DuoSuggestions
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="person-circle-outline" size={30} color="#555" />
        </TouchableOpacity>
        <Text style={styles.searchPlaceholder}>🔍 Search for something here...</Text>
        <TouchableOpacity>
          <Icon name="chatbubble-ellipses-outline" size={30} color="#555" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Duo preference</Text>

        {/* Questions */}
        <View style={styles.question}>
          <Text style={styles.questionText}>I accept to have a Duo</Text>
          <View style={styles.options}>
            <TouchableOpacity
              style={[styles.option, preferences.acceptDuo === 'yes' && styles.activeOption]}
              onPress={() => handleSelection('acceptDuo', 'yes')}
            >
              <Icon name="checkmark-circle" size={20} color={preferences.acceptDuo === 'yes' ? '#00ADEF' : '#777'} />
              <Text style={styles.optionText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.option, preferences.acceptDuo === 'no' && styles.activeOption]}
              onPress={() => handleSelection('acceptDuo', 'no')}
            >
              <Icon name="close-circle" size={20} color={preferences.acceptDuo === 'no' ? '#FF4D4D' : '#777'} />
              <Text style={styles.optionText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.question}>
          <Text style={styles.questionText}>A person living in same country</Text>
          <View style={styles.options}>
            <TouchableOpacity
              style={[styles.option, preferences.sameCountry === 'yes' && styles.activeOption]}
              onPress={() => handleSelection('sameCountry', 'yes')}
            >
              <Icon name="checkmark-circle" size={20} color={preferences.sameCountry === 'yes' ? '#00ADEF' : '#777'} />
              <Text style={styles.optionText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.option, preferences.sameCountry === 'no' && styles.activeOption]}
              onPress={() => handleSelection('sameCountry', 'no')}
            >
              <Icon name="close-circle" size={20} color={preferences.sameCountry === 'no' ? '#FF4D4D' : '#777'} />
              <Text style={styles.optionText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.question}>
          <Text style={styles.questionText}>A person with the same disease (cancer and/or rare disease)</Text>
          <View style={styles.options}>
            <TouchableOpacity
              style={[styles.option, preferences.sameDisease === 'yes' && styles.activeOption]}
              onPress={() => handleSelection('sameDisease', 'yes')}
            >
              <Icon name="checkmark-circle" size={20} color={preferences.sameDisease === 'yes' ? '#00ADEF' : '#777'} />
              <Text style={styles.optionText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.option, preferences.sameDisease === 'no' && styles.activeOption]}
              onPress={() => handleSelection('sameDisease', 'no')}
            >
              <Icon name="close-circle" size={20} color={preferences.sameDisease === 'no' ? '#FF4D4D' : '#777'} />
              <Text style={styles.optionText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.question}>
          <Text style={styles.questionText}>
            A person who is close in age to mine with +/- <Icon name="calendar-outline" size={16} /> 30 years
          </Text>
          <View style={styles.options}>
            <TouchableOpacity
              style={[styles.option, preferences.similarAge === 'yes' && styles.activeOption]}
              onPress={() => handleSelection('similarAge', 'yes')}
            >
              <Icon name="checkmark-circle" size={20} color={preferences.similarAge === 'yes' ? '#00ADEF' : '#777'} />
              <Text style={styles.optionText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.option, preferences.similarAge === 'no' && styles.activeOption]}
              onPress={() => handleSelection('similarAge', 'no')}
            >
              <Icon name="close-circle" size={20} color={preferences.similarAge === 'no' ? '#FF4D4D' : '#777'} />
              <Text style={styles.optionText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={handleSeeResults}>
          <Text style={styles.buttonText}>See results</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Icon name="home-outline" size={25} color="#777" />
          <Text style={styles.footerText}>Feed</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="people-outline" size={25} color="#00ADEF" />
          <Text style={[styles.footerText, styles.activeFooterText]}>Duo</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="chatbubbles-outline" size={25} color="#777" />
          <Text style={styles.footerText}>Community</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="newspaper-outline" size={25} color="#777" />
          <Text style={styles.footerText}>Forum</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="notifications-outline" size={25} color="#777" />
          <Text style={styles.footerText}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="settings-outline" size={25} color="#777" />
          <Text style={styles.footerText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  searchPlaceholder: {
    flex: 1,
    textAlign: 'center',
    color: '#B0B0B0',
    fontSize: 16,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  question: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  optionText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#555',
  },
  activeOption: {
    opacity: 1,
  },
  button: {
    backgroundColor: '#00ADEF',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    paddingHorizontal: 40,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  footerText: {
    color: '#777',
    fontSize: 12,
    textAlign: 'center',
  },
  activeFooterText: {
    color: '#00ADEF',
  },
});

export default DuoPreferences;
