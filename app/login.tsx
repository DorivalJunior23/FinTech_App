import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';

import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';

enum SignInType {
  Phone,
  Email,
  Google,
  Apple,
}

const Page = () => {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;
  const [countryCode, setCountryCode] = useState('+55');
  const [phoneNumber, setPhoneNumber] = useState('');
  const router = useRouter();

  
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={{ flex: 1 }}
      behavior="padding"
      
      >
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Welcome back</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter the phone number associated with your account
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Country code"
            placeholderTextColor={Colors.gray}
            value={countryCode}
          />

          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Mobile number"
            placeholderTextColor={Colors.gray}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            phoneNumber !== '' ? styles.enabled : styles.disabled,
            { marginBottom: 20 },
          ]}
          disabled={!phoneNumber}
          onPress={() => console.warn('signin')}>
          <Text style={[defaultStyles.buttonText]}>Continue</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
          <View
            style={{ flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: Colors.gray }}
          />
          <Text style={{ color: Colors.gray, fontSize: 20 }}>or</Text>
          <View
            style={{ flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: Colors.gray }}
          />
        </View>

        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            { marginTop: 20, backgroundColor: '#fff', flexDirection: 'row', gap: 16 },
          ]}
          onPress={() => console.warn('signin')}>
          <Ionicons name="mail" size={24} color={'#000'} />
          <Text style={[defaultStyles.buttonText, { color: '#000' }]}>Continue with email</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            { marginTop: 20, backgroundColor: '#fff', flexDirection: 'row', gap: 16 },
          ]}
          onPress={() => console.warn('signin')}>
          <Ionicons name="logo-google" size={24} color={'#000'} />
          <Text style={[defaultStyles.buttonText, { color: '#000' }]}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            { marginTop: 20, backgroundColor: '#fff', flexDirection: 'row', gap: 16 },
          ]}
          onPress={() => console.warn('signin')}>
          <Ionicons name="logo-apple" size={24} color={'#000'} />
          <Text style={[defaultStyles.buttonText, { color: '#000' }]}>Continue with Apple</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: 'row',
  },
  input: {
    padding: 20,
    backgroundColor: Colors.lightGray,
    borderRadius: 16,
    marginRight: 10,
    fontSize: 20,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});
export default Page;