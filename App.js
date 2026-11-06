import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Alert,
  ScrollView,
  StatusBar,
} from 'react-native';

export default function App() {
  const contactar = () => {
    Alert.alert('Contacto', '¡Gracias por querer contactarme!');
  };

  const portafolio = () => {
    Alert.alert('Portafolio', 'Aquí podrás conocer mis proyectos.');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.title}>Mi Perfil Estudiantil</Text>

      <Image
  source={require('./pruebaimg.jpeg')}
  style={styles.profileImage}
/>

      <Text style={styles.name}>Luis Alejandro Otaño</Text>
      <Text style={styles.subtitle}>Estudiante de Licenciatura en Informática</Text>

      <Text style={styles.sectionTitle}>Sobre mí</Text>
      <Text style={styles.description}>
        Soy estudiante universitario. Me gusta aprender cosas nuevas,
        la tecnología y seguir desarrollándome profesionalmente.
      </Text>

      <Text style={styles.sectionTitle}>Mis intereses</Text>

      <View style={styles.badges}>
  <Text style={styles.badge}>💻 Programación</Text>
  <Text style={styles.badge}>🚀 Tecnología</Text>
  <Text style={styles.badge}>🌐 Desarrollo web</Text>
</View>

      <Pressable style={styles.button} onPress={contactar}>
        <Text style={styles.buttonText}>📩 Contáctame</Text>
      </Pressable>

      <Pressable style={styles.buttonSecondary} onPress={portafolio}>
        <Text style={styles.buttonText}>🌐 Mi portafolio</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f4f8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#1e3a8a',
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 8,
    color: '#1e3a8a',
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
    color: '#333',
  },
  badges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  badge: {
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    padding: 10,
    borderRadius: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#1e3a8a',
    padding: 14,
    borderRadius: 10,
    marginTop: 25,
    width: '100%',
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: '#2563eb',
    padding: 14,
    borderRadius: 10,
    marginTop: 12,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});



