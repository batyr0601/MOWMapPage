import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.top}></View>
      <View style={styles.bottom}>
        <View style={styles.popup}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.address}>📍 1234 Kerbey Lane</Text>
          <Text style={styles.order}>1 regular (hot) + 1 white (cold)</Text>
          <View style={styles.line}></View>
          <Text style={styles.note}>Notes: Deliver to southernmost door to home.</Text>
          <Text style={styles.issues}>☎ Issues with address? Call MOW</Text>
          <TouchableOpacity  style={styles.button}>
            <Text style={styles.start}>Start</Text>
          </TouchableOpacity >
        </View>
      </View>

      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  start: {
    color: 'white',
    fontWeight: 700,
    fontSize: '32px',
  },
  button: {
    width: "100%",
    borderRadius: 30,
    height: 50,
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#00B8D1",
    alignSelf: "center",
  },
  issues: {
    color: "#A0A0A0",
    textDecorationLine: 'underline'
  },
  note: {
    color: "#A0A0A0",
    fontWeight: 500,
    //fontFamily: 'Inter',

  },
  line: {
    marginTop: "5%",
    marginBottom: "5%",
    color: '#00B8D13D',
    backgroundColor: '#00B8D13D',
    height: .5,
    borderColor : '#00B8D13D'
  },
  address: {
    fontWeight: 500,

  },
  name: {
    fontSize: 25,
    fontWeight: 500,
    color: "#00B8D1"
  },
  top: {
    flex: 5
  },
  bottom: {
    flex: 6,
    width: "100%",
    alignItems: "center"
  },
  popup: {
    // backgroundColor: "#FFC0CB",
    flex: 1,
    borderColor:'black',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderRadius: 10,
    paddingHorizontal: "5%",
    width: "50%",
    marginBottom: "20%",
    alignItems: "left"
    // height: "30%",
    //marginBottom: 5,
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
