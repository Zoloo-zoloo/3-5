import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


export default function Login({ navigation }) {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const handleLogin = () => {
signInWithEmailAndPassword(auth, email, password)
.then(() => navigation.replace("Home"))
.catch(err => alert(err.message));
};


return (
    <View style={styles.container}>
    <Text style={styles.title}>Sign In</Text>
    <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} />
    <TextInput style={styles.input} placeholder="Password"  onChangeText={setPassword} />
    <TouchableOpacity style={styles.button} onPress={handleLogin}>
    <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
    <Text onPress={() => navigation.navigate("SignUp")} style={styles.link}>Create account</Text>
    </View>
);
}


const styles = StyleSheet.create({
container: { flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#0f172a" 
},
title: { fontSize: 28, 
    color: "#fff", 
    marginBottom: 20, 
    textAlign: "center" 
},
input: { backgroundColor: "#fff", 
    padding: 12, 
    borderRadius: 10, 
    marginBottom: 10 
},
button: { backgroundColor: "#38bdf8", 
    padding: 15, 
    borderRadius: 10 
},
buttonText: { textAlign: "center",
    fontWeight: "bold" 
},
link: { color: "#38bdf8", 
    marginTop: 15, 
    textAlign: "center" 
}
});