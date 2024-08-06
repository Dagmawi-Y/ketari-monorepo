import * as React from "react";
import {useState} from 'react'
import { Text, StyleSheet, View, Image,TextInput,Pressable} from "react-native";

const SignUp = () => {
    const [secureTextEntry,setScureTextEntry] = useState(true)

    const visibility=()=>{
        setScureTextEntry(false)
    }
  return (
    <View style={styles.signUp}>
      <Text style={styles.registerAccount}>Register Account</Text>
      <Text style={[styles.fillYourDetails, styles.emailAddressClr]}>
        Fill your details or continue with social media
      </Text>
      <View style={[styles.email, styles.btnLayout]}>
        <View style={[styles.emailChild, styles.childLayout]} />
        <TextInput style={[styles.emailAddress, styles.messageIconPosition]} placeholder="Email Address" placeholderTextColor={'#6a6a6a'}
        />
        
        <Image
          style={[styles.messageIcon, styles.messageIconPosition]}
          resizeMode="cover"
          source={require("../assets/message.png")}
        />
          
        </View>
      <View style={[styles.name, styles.btnLayout]}>
        <View style={[styles.emailChild, styles.childLayout]} />
        <TextInput style={[styles.emailAddress, styles.messageIconPosition]} placeholder=" User Name" placeholderTextColor={'#6a6a6a'} />
        <Image
          style={styles.unionIcon}
          resizeMode="cover"
          source={require("../assets/union.png")}
        /> 
      </View>
      <View style={[styles.password, styles.btnLayout]}>
        <View style={[styles.emailChild, styles.childLayout]} />
        <Pressable onPress={()=>visibility}>
        <Image
          style={styles.eyeSlashIcon}
          resizeMode="cover"
          source={require("../assets/eyeslash.png")}
        />
        </Pressable>
        <Image
          style={styles.lockIcon}
          resizeMode="cover"
          source={require("../assets/lockicon.png")}
        />
        <TextInput style={[styles.emailAddress, styles.messageIconPosition]} 
        placeholder="Password" 
        placeholderTextColor={'#6a6a6a'}
        secureTextEntry={secureTextEntry}
        />
      </View>
      <View style={[styles.btn, styles.btnLayout]}>
        <View style={[styles.btnChild, styles.childLayout]} />
        <Pressable onPress={()=>console.log('preessed')}>
        <Text style={[styles.signUp1, styles.signUp1Typo]}>SIGN UP</Text>
        </Pressable>
        
      </View>
      <Text style={[styles.alreadyHaveAccountContainer, styles.signUp1Typo]}>
        <Text style={styles.emailAddressClr}>{`Already Have Account? `}</Text>
        <Pressable onPress={()=>console.log('first')}> 
            <Text style={[styles.logIn, styles.logInTypo]}>Log In</Text>
        </Pressable>
       
      </Text>
     
      <View style={styles.or}>
        <Text style={styles.orContinueWith}>Or Continue with</Text>
        <View style={[styles.orChild, styles.orItemLayout]} />
        <View style={[styles.orItem, styles.orItemLayout]} />
        <Image
          style={styles.socialIcon}
          resizeMode="cover"
          source={require("../assets/social.png")}
        />
      </View>
    </View>
  );
};
        
const styles = StyleSheet.create({
  emailAddressClr: {
    color: "#6a6a6a",
    fontFamily: "Poppins-Regular",
  },
  btnLayout: {
    height: 54,
    width: 335,
    left: 20,
    position: "absolute",
  },
  childLayout: {
    borderRadius: 12,
    left: 0,
    top: 0,
    height: 54,
    width: 335,
    position: "absolute",
  },
  messageIconPosition: {
    top: 17,
    position: "absolute",
  },
  signUp1Typo: {
    textAlign: "center",
    fontSize: 16,
    position: "absolute",
  },
  logInTypo: {
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
  },
  orItemLayout: {
    height: 2,
    width: 22,
    borderTopWidth: 2,
    borderColor: "#9e9e9e",
    borderStyle: "solid",
    top: 7,
    position: "absolute",
  },
  registerAccount: {
    top: 30,
    fontSize: 30,
    lineHeight: 30,
    fontWeight: "600",
    fontFamily: "Poppins-SemiBold",
    textAlign: "left",
    color: "#1a1d1e",
    left: 30,
    position: "absolute",
  },
  fillYourDetails: {
    top: 90,
    lineHeight: 24,
    width: 229,
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    textAlign: "left",
    left: 30,
    position: "absolute",
  },
  emailChild: {
    backgroundColor: "#fff",
  },
  emailAddress: {
    left: 55,
    lineHeight: 21,
    color: "#6a6a6a",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    textAlign: "left",
  },
  messageIcon: {
    width: 20,
    height: 20,
    left: 20,
    overflow: "hidden",
  },
  email: {
    top: 236,
  },
  unionIcon: {
    height: "40.74%",
    width: "5.97%",
    top: "35.19%",
    right: "88.06%",
    bottom: "24.07%",
    left: "5.97%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  name: {
    top: 158,
  },
  eyeSlashIcon: {
    top: 21,
    left: 298,
    width: 16,
    height: 13,
    position: "absolute",
  },
  lockIcon: {
    top: 12,
    width: 21,
    height: 27,
    left: 20,
    position: "absolute",
  },
  password: {
    top: 314,
  },
  btnChild: {
    backgroundColor: "#4ca6a8",
  },
  signUp1: {
    top: 19,
    left: 136,
    color: "#fff",
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    lineHeight: 16,
  },
  btn: {
    top: 398,
  },
  logIn: {
    color: "#1a1d1e",
    fontWeight: "500",
  },
  alreadyHaveAccountContainer: {
    top: 708,
    left: 70,
    lineHeight: 26,
    marginBottom:10
  },
  chevronLeftIcon: {
    top: 39,
    left: 29,
    width: 14,
    height: 24,
    position: "absolute",
  },
  orContinueWith: {
    lineHeight: 16,
    top: 0,
    color: "#6a6a6a",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    textAlign: "left",
    left: 30,
    position: "absolute",
  },
  orChild: {
    left: -1,
  },
  orItem: {
    left: 173,
  },
  socialIcon: {
    top: 46,
    left: 27,
    width: 140,
    height: 60,
    position: "absolute",
  },
  or: {
    top: 485,
    left: 91,
    width: 194,
    height: 106,
    position: "absolute",
  },
  signUp: {
    backgroundColor: "#fbfbfb",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});
export default SignUp;   
        
             
          
     



