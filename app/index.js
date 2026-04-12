import React, { useEffect, useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ActivityIndicator, 
  Image, 
  Button 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getUser } from '../services/api';

export default function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simple function to fetch data
  const loadUser = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getUser(1);
      setUserData(data);
    } catch (err) {
      setError('Could not fetch user data. Please try again.');
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  // Loading state
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Loading...</Text>
      </View>
    );
  }

  // Error state
  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
        <Button title="Try Again" onPress={loadUser} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Github User Profile</Text>
        
        {userData && (
          <View style={styles.profileContainer}>
            <Image 
              source={{ uri: userData.avatar_url }} 
              style={styles.image} 
            />
            <Text style={styles.name}>{userData.name}</Text>
            <Text style={styles.login}>@{userData.login}</Text>
            
            {userData.bio ? (
              <Text style={styles.bio}>{userData.bio}</Text>
            ) : (
              <Text style={styles.bio}>No bio available</Text>
            )}

            <View style={styles.stats}>
              <Text>Followers: {userData.followers}</Text>
              <Text>Following: {userData.following}</Text>
              <Text>Public Repos: {userData.public_repos}</Text>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
  },
  login: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  bio: {
    textAlign: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  stats: {
    marginTop: 20,
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    width: '100%',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
