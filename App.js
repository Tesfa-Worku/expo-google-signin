import React, { useEffect} from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { StyleSheet, View, Button } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export default function App() {

  const [ request, response, promptAsync] = Google.useAuthRequest({
    webClientId: '672120757874-vlqrru2vmlcbihbnphmnjbps7fmker18.apps.googleusercontent.com',
    expoClientId: '672120757874-fp7c3eii4co58tqneppjrn3qhs8nv4rn.apps.googleusercontent.com'
  })

  useEffect(() => {
    if(response?.type === 'success') {
      const { authentication} = response;
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
