import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from "react-native-modal-datetime-picker"; // Importer la bibliothèque du sélecteur de date


const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleSendPress = () => {
    console.log('Send button pressed');
    // Navigate to the ForgotPasswordConfirmationScreen
    navigation.navigate('ForgotPasswordConfirmationScreen');
  };

  const handleCancelPress = () => {
    console.log('Cancel button pressed');
  };

  const handleDateConfirm = (date) => {
    setDateOfBirth(date.toLocaleDateString()); // Mettre à jour la date de naissance avec le format de la date sélectionnée
    setDatePickerVisible(false); // Fermer le calendrier après sélection
  };

  const handleDateCancel = () => {
    setDatePickerVisible(false); // Fermer le calendrier si l'utilisateur annule
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="person-circle-outline" size={30} color="#555" /> {/* Profile icon */}
        </TouchableOpacity>
        <Text style={styles.searchPlaceholder}>🔍 Search for something here...</Text>
        <TouchableOpacity>
          <Icon name="chatbubble-ellipses-outline" size={30} color="#555" /> {/* Message icon */}
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Image source={require('../assets/lock.png')} style={styles.lockImage} />

        <Text style={styles.title}>FORGOT PASSWORD</Text>
        <Text style={styles.description}>
          Provide your account email address or your phone number and press SEND Button to request a new password.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Your email or phone number"
          keyboardType="email-address"
        />
        
        {/* Date of Birth field with Date Picker */}
        <TouchableOpacity style={styles.input} onPress={() => setDatePickerVisible(true)}>
          <Text style={styles.dateText}>{dateOfBirth || "Your date of birth dd/mm/yyyy"}</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <Button title="Send" onPress={handleSendPress} color="#007BFF" />
          <View style={styles.spacer} />
          <Button title="Cancel" onPress={handleCancelPress} color="#6c757d" />
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        {/* Feed */}
        <TouchableOpacity style={styles.footerItem}>
          <Icon name="home-outline" size={25} color="#777" />
          <Text style={styles.footerText}>Feed</Text>
        </TouchableOpacity>

        {/* Duo */}
        <TouchableOpacity style={styles.footerItem}>
          <Icon name="people-outline" size={25} color="#777" />
          <Text style={styles.footerText}>Duo</Text>
        </TouchableOpacity>

        {/* Community with Active Indicator */}
        <TouchableOpacity style={styles.footerItem}>
          <Icon name="chatbubbles-outline" size={25} color="#00ADEF" />
          <Text style={[styles.footerText, styles.activeFooterText]}>Community</Text>
          <View style={styles.activeIndicator} />
        </TouchableOpacity>

        {/* Forum */}
        <TouchableOpacity style={styles.footerItem}>
          <Icon name="newspaper-outline" size={25} color="#777" />
          <Text style={styles.footerText}>Forum</Text>
        </TouchableOpacity>

        {/* Notifications */}
        <TouchableOpacity style={styles.footerItem}>
          <Icon name="notifications-outline" size={25} color="#777" />
          <Text style={styles.footerText}>Notification</Text>
        </TouchableOpacity>

        {/* Settings */}
        <TouchableOpacity style={styles.footerItem}>
          <Icon name="settings-outline" size={25} color="#777" />
          <Text style={styles.footerText}>Settings</Text>
        </TouchableOpacity>
      </View>

      {/* Date Picker Modal */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={handleDateCancel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  searchPlaceholder: {
    color: '#B0B0B0',
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    marginBottom: 10,
    alignItems: 'center',
  },
  lockImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: '#6c757d',
  },
  input: {
    height: 50,
    borderColor: '#CED4DA',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    width: '100%',
    justifyContent: 'center',
  },
  dateText: {
    color: '#777',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spacer: {
    width: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    color: '#777',
    fontSize: 14,
    marginTop: 5,
  },
  activeFooterText: {
    color: '#00ADEF',
  },
  activeIndicator: {
    width: 30,
    height: 3,
    backgroundColor: '#00ADEF',
    marginTop: 5,
    borderRadius: 2,
  },
});

export default ForgotPasswordScreen;
