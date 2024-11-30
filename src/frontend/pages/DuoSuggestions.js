import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';  // Import de useNavigation

const DuoSuggestions = () => {
  const [usersChosen, setUsersChosen] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();  // Initialisation de la navigation

  const users = [
    { id: 1, name: 'Paul', image: require('../assets/image1.png'), country: 'France', age: 30 },
    { id: 2, name: 'Sandrine', image: require('../assets/image2.png'), country: 'Italy', age: 28 },
    { id: 3, name: 'Sami', image: require('../assets/image2.png'), country: 'USA', age: 35 },
    { id: 4, name: 'Fatma', image: require('../assets/image2.png'), country: 'Poland', age: 42 },
    { id: 5, name: 'Eya', image: require('../assets/image2.png'), country: 'France', age: 25 },
    { id: 6, name: 'Luc', image: require('../assets/image2.png'), country: 'Germany', age: 38 }
  ];

  const handleChooseAsDuo = (user) => {
    if (!usersChosen.includes(user.name)) {
      setUsersChosen([...usersChosen, user.name]);
      console.log(`Chosen ${user.name} as Duo`);
      
      // Navigate to the correct details page based on user name
      if (user.name === 'Paul') {
        navigation.navigate('DetailsPaul');
      } else {
        navigation.navigate('DuoDetails', { user: user });
      }
    }
  };

  const handleIgnore = (name) => {
    console.log(`Ignored ${name}`);
  };

  return (
    <View style={styles.container}>
      {/* Header with Search and Icon */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="person-circle-outline" size={30} color="#555" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="🔍 Search for something here..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity>
          <Icon name="chatbubble-ellipses-outline" size={30} color="#555" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Duo Suggestions</Text>
        {users.filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase())).map((user) => (
          <View key={user.id} style={styles.suggestion}>
            {/* Ligne avec image, nom, âge et pays */}
            <View style={styles.userRow}>
              <Image source={user.image} style={styles.userImage} />
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.userDetails}>{`${user.country} - ${user.age} ans`}</Text>
              </View>
            </View>

            {/* Icônes pour message, poubelle et ADN */}
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => console.log(`Message to ${user.name}`)}>
                <Icon name="chatbubble-ellipses-outline" size={24} color="#4e9af1" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log(`Delete ${user.name}`)}>
                <Icon name="trash-outline" size={24} color="#f44336" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log(`DNA for ${user.name}`)}>
                <Icon name="ios-bios" size={24} color="#ff9800" style={styles.icon} />
              </TouchableOpacity>
            </View>

            {/* Boutons */}
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.ignoreButton} onPress={() => handleIgnore(user.name)}>
                <Text style={styles.buttonText}>Ignore</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.duoButton} onPress={() => handleChooseAsDuo(user)}>
                <Text style={styles.duoButtonText}>Choose as Duo</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
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
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 15,
    flex: 1,
    marginHorizontal: 10,
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  suggestion: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  userDetails: {
    fontSize: 14,
    color: '#666',
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  ignoreButton: {
    backgroundColor: '#ddd',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  duoButton: {
    backgroundColor: '#4e9af1',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  duoButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  footerText: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
  },
  activeFooterText: {
    color: '#00ADEF',
    fontWeight: 'bold',
  },
});

export default DuoSuggestions;
