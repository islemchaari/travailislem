// src/frontend/pages/DetailsPaul.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Assurez-vous d'avoir installé react-native-vector-icons
import { useNavigation } from '@react-navigation/native'; // Import du hook useNavigation

const DetailsPaul = () => {
  const navigation = useNavigation(); // Récupération de l'objet navigation

  return (
    <View style={styles.container}>
      {/* Barre de recherche en haut */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="person-circle-outline" size={30} color="#555" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="🔍 Search for something here..."
        />
        <TouchableOpacity>
          <Icon name="chatbubble-ellipses-outline" size={30} color="#555" />
        </TouchableOpacity>
      </View>

      {/* Contenu principal */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Details of Paul</Text>

        {/* Nouveau texte ajouté entre le titre et l'image */}
        <Text style={styles.additionalText}>
          You have now a Duo. {"\n"}
          We will send him a notification and your email address. {"\n\n"}
          If it doesn’t fit your choices, you can change it later. {"\n\n"}
          You can send him a message with this icon{' '}
          <Icon name="chatbubble-outline" size={20} color="#00ADEF" /> {"\n\n"}
          or contact him at the following email address{' '}
          <Icon name="mail-outline" size={20} color="#00ADEF" />.
        </Text>

        <Image source={require('../assets/image1.png')} style={styles.userImage} />
        <Text style={styles.userName}>Paul</Text>
        <Text style={styles.userDetails}>Country: France - Age: 30</Text>
      </ScrollView>

      {/* Bouton "Change Duo" */}
      <TouchableOpacity
        style={styles.changeDuoButton}
        onPress={() => navigation.navigate('ChangeDuoScreen')} // Navigation vers ChangeDuoScreen
      >
        <Text style={styles.changeDuoText}>Change Duo</Text>
      </TouchableOpacity>

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
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
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
    paddingLeft: 10,
    marginHorizontal: 10,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  additionalText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    alignSelf: 'center',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  userDetails: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  changeDuoButton: {
    backgroundColor: '#00ADEF',
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  changeDuoText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerText: {
    fontSize: 12,
    color: '#777',
  },
  activeFooterText: {
    color: '#00ADEF',
    fontWeight: 'bold',
  },
});

export default DetailsPaul;
