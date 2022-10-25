import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Register</Text>
      <Text style={styles.subtitle}>Full Name</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="John Doe"
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
        />
      </View>

      <Text style={styles.subtitle}>Date Of Birth</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          type={'datetime'}
          placeholder="MM/DD/YYYY"
          placeholderTextColor="#003f5c"
          onChangeText={(date) => setDate(date)}
        />
      </View>

      <Text style={styles.subtitle}>Phone Number/Email Address</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="xxx-xxx-xxx"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
        />
      </View>

      <TouchableOpacity style={styles.registerBtn}>
        <Text style={styles.registerText}>Next</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    width: '80%',
  },
  subtitle: {
    width: '80%',
    textAlign: 'left',
    padding: 5,
  },
  inputView: {
    // backgroundColor: "#FFC0CB",
    borderColor:'black',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderRadius: 10,
    width: "80%",
    height: 45,
    marginBottom: 5,
    paddingLeft: 10,
    alignItems: "left",
  },

  TextInput: {
    height: 50,
    flex: 1,
    // padding: 10,
    // marginLeft: 20,
  },
  registerBtn: {
    width: "80%",
    borderRadius: 30,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "rgb(171,208,55)",
    padding: 20,
  },
  registerText: {
    fontSize: 30,
    fontWeight: 'bold',
  }
});
