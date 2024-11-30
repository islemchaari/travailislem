import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ChangeDuoScreen = () => {
  const [reasons, setReasons] = useState({
    noContact: false,
    notMyChoice: false,
    unpleasantPerson: false,
    otherReasons: false,
  });

  const navigation = useNavigation();

  const toggleReason = (key) => {
    setReasons((prevReasons) => ({
      ...prevReasons,
      [key]: !prevReasons[key],
    }));
  };

  return (
    <View style={styles.container}>
      {/* Barre de recherche */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="person-circle-outline" size={30} color="#555" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="🔍 Search..."
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity>
          <Icon name="chatbubble-ellipses-outline" size={30} color="#555" />
        </TouchableOpacity>
      </View>

      {/* Contenu principal */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>
          Why do you want to change your Duo?
        </Text>

        {/* Options */}
        {[
          {
            key: 'noContact',
            label: 'Impossible to get in touch with them or no contact',
          },
          {
            key: 'notMyChoice',
            label: 'The person does not fit my choice',
          },
          {
            key: 'unpleasantPerson',
            label: 'Unpleasant person',
          },
          {
            key: 'otherReasons',
            label: 'Other reasons',
          },
        ].map((option) => (
          <View key={option.key} style={styles.optionContainer}>
            <Text style={styles.optionText}>{option.label}</Text>
            <View style={styles.radioGroup}>
              <TouchableOpacity
                style={[
                  styles.radioButton,
                  reasons[option.key] && styles.greenBorder,
                ]}
                onPress={() => toggleReason(option.key)}
              >
                <Animated.View
                  style={[
                    styles.radioSelected,
                    reasons[option.key] && styles.greenFill,
                  ]}
                />
              </TouchableOpacity>
              <Text style={styles.radioLabel}>Yes</Text>

              <TouchableOpacity
                style={[
                  styles.radioButton,
                  !reasons[option.key] && styles.redBorder,
                ]}
                onPress={() =>
                  setReasons((prevReasons) => ({
                    ...prevReasons,
                    [option.key]: false,
                  }))
                }
              >
                <Animated.View
                  style={[
                    styles.radioSelected,
                    !reasons[option.key] && styles.redFill,
                  ]}
                />
              </TouchableOpacity>
              <Text style={styles.radioLabel}>No</Text>
            </View>
          </View>
        ))}

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonPrimary}>
            <Text style={styles.buttonTextPrimary}>Select a new Duo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSecondary}
            onPress={() => navigation.navigate('Page1')}
          >
            <Text style={styles.buttonTextSecondary}>Go to home page</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        {[
          { name: 'home-outline', label: 'Feed' },
          { name: 'people-outline', label: 'Duo', active: true },
          { name: 'chatbubbles-outline', label: 'Community' },
          { name: 'newspaper-outline', label: 'Forum' },
          { name: 'notifications-outline', label: 'Notification' },
          { name: 'settings-outline', label: 'Settings' },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.footerItem}>
            <Icon
              name={item.name}
              size={25}
              color={item.active ? '#007AFF' : '#aaa'}
            />
            <Text
              style={[
                styles.footerText,
                item.active && styles.activeFooterText,
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingLeft: 15,
    marginHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  optionContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  optionText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 10,
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioSelected: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  greenBorder: {
    borderColor: '#4CAF50',
  },
  greenFill: {
    backgroundColor: '#4CAF50',
  },
  redBorder: {
    borderColor: '#F44336',
  },
  redFill: {
    backgroundColor: '#F44336',
  },
  radioLabel: {
    fontSize: 16,
    color: '#555',
    marginRight: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonPrimary: {
    flex: 1,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginRight: 10,
    alignItems: 'center',
  },
  buttonSecondary: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#007AFF',
    alignItems: 'center',
  },
  buttonTextPrimary: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonTextSecondary: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 3,
  },
  activeFooterText: {
    color: '#007AFF',
    fontWeight: '600',
  },
});

export default ChangeDuoScreen;