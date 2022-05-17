import React, { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { StyleSheet, View, Text, Button } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [loggedIn, setLoggedIn] = React.useState("");
  const [ request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '672120757874-fp7c3eii4co58tqneppjrn3qhs8nv4rn.apps.googleusercontent.com',
    webClientId: '672120757874-vlqrru2vmlcbihbnphmnjbps7fmker18.apps.googleusercontent.com',
  });

  useEffect(() => {
    if(response?.type === 'success') {
      const { authentication, type} = response;
      setLoggedIn(type);
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync();
        }}
      />
      <Text>
        {loggedIn === "success" ? "Logged In" : "Logged Out"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
