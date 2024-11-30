import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';  // Importer useNavigation

const Step4 = () => {
  const navigation = useNavigation();  // Hook de navigation

  // Fonction pour naviguer vers DuoPreferences
  const goToDuoPreferences = () => {
    navigation.navigate('DuoPreferences');  // Naviguer vers la page DuoPreferences
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="person-circle-outline" size={30} color="#555" /> {/* Icone de profil */}
        </TouchableOpacity>
        <Text style={styles.searchPlaceholder}>🔍 Search for something here...</Text>
        <TouchableOpacity>
          <Icon name="chatbubble-ellipses-outline" size={30} color="#555" /> {/* Icone de messagerie */}
        </TouchableOpacity>
      </View>

      {/* Main Content with ScrollView */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Find your Duo, let’s start</Text>
        <Text style={styles.paragraph}>
          Illness is a test of life and a difficult experience. It is not always easy to talk freely about it with your
          family or friends. We do not want to worry them by delivering our anxieties or fears. Your wife or your
          husband may also have difficulty talking about it for fear of worrying us a little more. Because just talking
          about it awakens painful memories. We are often isolated. And the chain of medical examinations, invasive
          treatments, repeated hospitalizations may accentuate this feeling.
        </Text>
        <Text style={styles.paragraph}>
          However, it is essential not to keep everything to yourself and to share in confidence, with someone who can
          understand you. Who better than a sick person or "someone who has been through it", could listen to you and
          understand your anxieties?
        </Text>
        <Text style={styles.paragraph}>
          The objective is to give each person to find is Duo, and exchange or share with confidence while helping each
          other to overcome difficult events.
        </Text>

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={goToDuoPreferences}>
          <Text style={styles.buttonText}>Go</Text>
        </TouchableOpacity>

        {/* Enlarged Rocket Icon */}
        <Image
          source={require('C:/Users/Islem/OneDrive - SUPCOM/Bureau/test/projetduolib/src/frontend/assets/f.png')}
          style={styles.rocketIcon} // Utilisation d'un style spécifique pour la fusée
        />
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        {/* Feed */}
        <TouchableOpacity style={styles.footerItem}>
          <Icon name="home-outline" size={25} color="#777" />
          <Text style={styles.footerText}>Feed</Text>
        </TouchableOpacity>

        {/* Duo with Active Indicator */}
        <TouchableOpacity style={styles.footerItem}>
          <Icon name="people-outline" size={25} color="#00ADEF" /> {/* Duo highlighted */}
          <Text style={[styles.footerText, styles.activeFooterText]}>Duo</Text>
          <View style={styles.activeIndicator} /> {/* Barre active sous Duo */}
        </TouchableOpacity>

        {/* Community */}
        <TouchableOpacity style={styles.footerItem}>
          <Icon name="chatbubbles-outline" size={25} color="#777" />
          <Text style={styles.footerText}>Community</Text>
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
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    color: '#555',
    marginBottom: 12,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#00ADEF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rocketIcon: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 20,
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
    color: '#00ADEF', // Couleur différente pour indiquer l'élément actif
  },
  activeIndicator: {
    width: 30,
    height: 3, // Petite barre
    backgroundColor: '#00ADEF', // Même couleur que l'élément actif
    marginTop: 5,
    borderRadius: 2,
  },
});

export default Step4;
