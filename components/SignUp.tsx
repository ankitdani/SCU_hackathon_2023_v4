// components/signup.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, TouchableOpacity } from 'react-native';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const getMessageFromErrorCode = (errorCode: any): "Email Id already registered" | "Invalid EmailId" | "Invalid Password" | "Invalid User" | "Invalid User" => {
    switch (errorCode) {
        case "auth/email-already-exists":
            return "Email Id already registered";
        case "auth/invalid-email":
            return "Invalid EmailId";
        case "auth/invalid-password":
            return "Invalid Password";
        case "auth/wrong-password":
            return "Wrong Password";
        default:
            return "Invalid User";
    }
}

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [isSignUp, setIsSignUp] = useState(true);
    const handleButtonClick = () => {
        isSignUp ? registerUser() : loginUser();
    }
    const loginUser = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                Alert.alert(getMessageFromErrorCode(errorCode));
            });
    }
    const registerUser = () => {
        if (email === '' && password === '') {
            Alert.alert('Enter details to signup!')
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    Alert.alert(errorMessage);
                });
        }
    }
    return (
        <View style={styles.container}>
            <Image source={require("../assets/halemate.png")} style={{ width: 300, height: 300 }}
            />
            {
                isSignUp ? (<TextInput
                    style={styles.inputStyle}
                    placeholder="Name"
                    value={displayName}
                    onChangeText={(val) => setDisplayName(val)}
                />) : null
            }

            <TextInput
                style={styles.inputStyle}
                placeholder="Email"
                value={email}
                onChangeText={(val) => setEmail(val)}
            />
            <TextInput
                style={styles.inputStyle}
                placeholder="Password"
                value={password}
                onChangeText={(val) => setPassword(val)}
                maxLength={15}
                secureTextEntry={true}
            />
            <Button
                color="#3740FE"
                title={isSignUp ? "Signup" : "Login"}
                onPress={() => handleButtonClick()}
            />
            {
                isSignUp ? (
                    <TouchableOpacity onPress={() => setIsSignUp(false)}>
                        <Text
                            style={styles.loginText}
                        >
                            Already Registered? Click here to login
                        </Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={() => setIsSignUp(false)}>
                        <Text
                            style={styles.loginText}
                            onPress={() => setIsSignUp(true)}>
                            SignUp
                        </Text>
                    </TouchableOpacity>)
            }
        </View>
    );
}

export default SignUp;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 35,
        backgroundColor: '#fff'
    },
    inputStyle: {
        width: '100%',
        marginBottom: 15,
        paddingBottom: 15,
        alignSelf: "center",
        borderColor: "#ccc",
        borderBottomWidth: 1
    },
    loginText: {
        color: '#3740FE',
        marginTop: 25,
        textAlign: 'center'
    },
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
});