import React from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Icon, ProfileItem } from "../components";
import DEMO from "../assets/data/demo";
import styles, { WHITE } from "../assets/styles";
import { auth } from '../firebase';

const Profile = () => {
  const {
    age,
    image,
    info1,
    info2,
    info3,
    info4,
    location,
    match,
    name,
  } = DEMO[7];

  const signOut =() => {
    console.log("signout");
    auth.signOut();
  }

  return (
    <View style={{ flex: 1 }}>
 <View style={{ flex: 1 }}>
      </View>
      <TouchableOpacity style={styles.roundedButton} onPress={() => signOut()}>
        <Icon name="log-out-outline" size={20} color={WHITE} />
        <Text style={styles.textButton}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
