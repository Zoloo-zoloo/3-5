import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function SignUp({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignUp = () => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Account created. Please sign in.");
      navigation.replace("Login");
    })
    .catch(err => alert(err.message));
};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Create Account</Text>
			<TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} value={email} />
			<TextInput style={styles.input} placeholder="Password"  onChangeText={setPassword} value={password} />
			<TouchableOpacity style={styles.button} onPress={handleSignUp}>
				<Text style={styles.buttonText}>Sign Up</Text>
			</TouchableOpacity>
			<Text onPress={() => navigation.navigate("Login")} style={styles.link}>Already have an account? Sign In</Text>
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