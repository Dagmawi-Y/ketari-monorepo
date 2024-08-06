import * as React from "react";
import { useState } from "react";
import { } from "react-native";
import { Modal,Button,SafeAreaView,Text, StyleSheet, View, Image,TextInput,TouchableOpacity,Pressable } from "react-native";

const LogIn = ({navigation}) => {

  //idk if we have to use useRef hook insted, i will see that
  const [email,setEmail] = useState(null)
  const [password,setPassword] = useState(null)

  // i thought it is better to use modal rather than another screen for the forgot password
  const [isModalVisible,setIsModalVisible] = useState(false)

  const [secureTextEntry,setSecureTextEntry] = useState(true)
  const PasswordInputHandler=({value})=>{
    //the input validation goes here
  }

  const EmailInputVlidation = ({value})=>{
    //email input validation goes here,regex
  }

  const LoginHandler=()=>{
     navigation.navigate('Tab')
    //login handling goes here
  }

  const forgetPasswordHandler=()=>{
   setIsModalVisible(true)
  }

  const passwordVisibilityHandler=({value})=>{
    switch(value){
      case true:
        setSecureTextEntry(false)
        break;
      case false:
        setSecureTextEntry(true)
        break;
      default:
        setSecureTextEntry(true)
    }
  }

  return (
    <View style={styles.logIn}>
      <Text style={styles.welcomeBack}>Welcome Back!</Text>
      <Text style={[styles.fillYourDetails, styles.emailAddressTypo]}>
        Fill your details or continue with social media
      </Text>
      <View style={[styles.email, styles.btnLayout]}>
        <View style={[styles.emailChild, styles.childLayout]} />
        <TextInput style={[styles.emailAddress, styles.emailAddressTypo]} 
        placeholder="Email Address"
        placeholderTextColor={'#6a6a6a'}
        onChangeText={(value)=>EmailInputVlidation(value)}  
        value={email} />
        
        <Image
          style={[styles.messageIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/message.png")}
        />
      </View>
      <View style={[styles.password, styles.btnLayout]}>
        <View style={[styles.emailChild, styles.childLayout]} />
        <Pressable onPress={()=>passwordVisibilityHandler(secureTextEntry)}>
        <Image
          style={styles.eyeSlashIcon}
          resizeMode="cover"
          source={require("../assets/eyeslash.png")}
        />
        </Pressable>
        <Image
          style={[styles.lockIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/lockicon.png")}
        />
        <TextInput style={[styles.emailAddress, styles.emailAddressTypo]} 
        placeholder="Password" 
        placeholderTextColor={'#6a6a6a'}
        onChangeText={(value)=>PasswordInputHandler(value)}
        value={password}
        secureTextEntry={secureTextEntry}
        /> 
         
       
      </View>
      <View style={[styles.btn, styles.btnLayout]}>
        <View style={[styles.btnChild, styles.childLayout]} />

        <TouchableOpacity onPress={()=>navigation.navigate('Tab')}>
         <Text style={[styles.logIn1, styles.logIn1Typo]}>LOG IN</Text>
        </TouchableOpacity>
        
        
            
      </View>
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
      
      <TouchableOpacity onPress={forgetPasswordHandler}>

      <Text style={[styles.forgetPassword, styles.emailAddressTypo]}>
        Forget Password?
       </Text>
      </TouchableOpacity> 
      
      
      <Text style={[styles.newUserCreateContainer, styles.logIn1Typo]}>
        <Text style={styles.newUser}>{`New User? `}</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}}>
        <Text style={styles.createAccount}>Create Account</Text>
        </TouchableOpacity>
      </Text>

      <Modal
      visible={isModalVisible}
      animationType="fade"
      onRequestClose={()=>setIsModalVisible(false)}
      >
        <SafeAreaView style={{
          flex:1,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'6a6a6a'
        }}>
          <Text
          style={{color:'red'}}
          > Reset Password Modal Screen</Text>
          <Button title='Go Back' onPress={()=>setIsModalVisible(false)}/>

          {/* we didn't got the design for the look of the screen UI */}
        </SafeAreaView>
      

      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  emailAddressTypo: {
    fontFamily: "Poppins-Regular",
    color: "#6a6a6a",
    textAlign: "left",
    position: "absolute",
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
  iconPosition: {
    left: 20,
    position: "absolute",
  },
  logIn1Typo: {
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    fontSize: 16,
    position: "absolute",
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
  welcomeBack: {
    top: 100,
    fontSize: 30,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
    textAlign: "left",
    color: "#1a1d1e",
    left: 30,
    position: "absolute",
  },
  fillYourDetails: {
    top: 140,
    lineHeight: 24,
    width: 227,
    color: "#6a6a6a",
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    left: 30,
  },
  emailChild: {
    backgroundColor: "#fff",
  },
  emailAddress: {
    top: 16,
    left: 54,
    lineHeight: 21,
    color: "#6a6a6a",
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
  messageIcon: {
    top: 15,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  email: {
    top: 218,
  },
  eyeSlashIcon: {
    top: 21,
    left: 298,
    width: 16,
    height: 13,
    position: "absolute",
  },
  lockIcon: {
    top: 14,
    width: 21,
    height: 27,
  },
  password: {
    top: 296,
  },
  btnChild: {
    backgroundColor: "#4ca6a8",
  },
  logIn1: {
    top: 19,
    left: 142,
    color: "#fff",
    lineHeight: 16,
  },
  btn: {
    top: 412,
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
    top: 506,
    left: 91,
    width: 194,
    height: 106,
    position: "absolute",
  },
  forgetPassword: {
    top: 370,
    left: 239,
    fontSize: 13,
    lineHeight: 14,
    color: "#6a6a6a",
  },
  newUser: {
    color: "#6a6a6a",
  },
  createAccount: {
    color: "#1a1d1e",
  },
  newUserCreateContainer: {
    top: 652,
    left: 80,
    lineHeight: 26,
  },
  logIn: {
    backgroundColor: "#fbfbfb",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LogIn;