import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const NoDisease = ({ navigation }) => {
  const [image, setImage] = useState(null);

  // Demander l'accès à la caméra et à la galerie
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Vous devez donner la permission d'accès à la caméra");
      return;
    }

    // Ouvrir la caméra
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri); // Enregistrer l'URI de l'image capturée
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.stepText}>03</Text>
        <Text style={styles.title}>Profile</Text>
      </View>

      {/* Description Section */}
      <Text style={styles.description}>
        You can add a photo to customize your profile
      </Text>

      {/* Image Options Section */}
      <View style={styles.optionsContainer}>
        {/* Afficher uniquement l'image capturée ou l'icône caméra si aucune image n'est capturée */}
        {!image ? (
          <TouchableOpacity style={styles.option} onPress={pickImage}>
            <Image
              source={require('../assets/camera.png')} // Afficher l'icône caméra
              style={styles.optionImage}
            />
            <Text style={styles.optionText}>Add a photo</Text>
          </TouchableOpacity>
        ) : (
          // Si une image a été capturée, afficher uniquement cette image
          <Image
            source={{ uri: image }} // Afficher l'image capturée
            style={styles.selectedImage}
          />
        )}

        {/* Si aucune photo n'a été capturée, afficher l'option "Default photo" */}
        {!image && (
          <>
            <Text style={styles.orText}>Or let's take one by default</Text>

            <TouchableOpacity style={styles.option}>
              <Image
                source={require('../assets/default-photo.png')} // Default photo image
                style={styles.optionImage}
              />
              <Text style={styles.optionText}>Default photo</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      {/* Next Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Step4')} // Navigate to Step4
      >
        <Text style={styles.buttonText}>Next - Go to step 4</Text>
      </TouchableOpacity>

      {/* Login Link Section */}
      <View style={styles.loginLinkContainer}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.loginButton}>Login here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  stepText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFB400',
    marginRight: 8,
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    color: '#4E5D78',
  },
  description: {
    fontSize: 18,
    color: '#090A0A',
    textAlign: 'center',
    marginVertical: 16,
  },
  optionsContainer: {
    alignItems: 'center',
    marginVertical: 32,
  },
  option: {
    alignItems: 'center',
    marginBottom: 20,
  },
  optionImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#4E5D78',
  },
  orText: {
    fontSize: 16,
    color: '#4E5D78',
    marginVertical: 10,
  },
  selectedImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#377DFF',
    borderRadius: 48,
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '800',
  },
  loginLinkContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  loginText: {
    fontSize: 14,
    color: '#4E5D78',
  },
  loginButton: {
    fontSize: 14,
    color: '#377DFF',
    marginLeft: 4,
  },
});

export default NoDisease;
