import {TextInput, View,StyleSheet,TouchableOpacity, Text,SafeAreaView } from 'react-native'
import React from 'react'
import {Avatar} from 'react-native-elements'

const Profile = () => {
  return (
    <SafeAreaView style={{flex:1}}>
       <View style={styles.container}>
        <Avatar 
        containerStyle={{
          height:180,
          width:120
        }}
        rounded
        source={require('../assets/9650.png')}
        />
       </View>
       <Text style={styles.name}> Adom Shafi</Text>
       <TouchableOpacity>
       <Text style={styles.edit}> Edit Profile</Text>
       </TouchableOpacity>
       <View style={styles.informationContainer}>
        <Text style={styles.text}>
          Name
        </Text>
        
        <TextInput
        placeholder='Adom Smith'
        placeholderTextColor={'#6A6A6A'}
        style={styles.input}
          />
        <Text style={styles.text}>
          Your Email
        </Text>
        
        <TextInput
        style={styles.input}
        placeholder='hellobenasik@gmail.com'
        placeholderTextColor={'#6A6A6A'}
          />
       
        
        <Text style={styles.text}>
          Password
        </Text>
      
        <TextInput
        style={styles.input}
        placeholder='12345678'
        placeholderTextColor={'#6A6A6A'}
        selectTextOnFocus          />
      </View>
         
         <TouchableOpacity
         style={styles.btn}
        //  onPress={''}
         >
          <Text style={styles.btnText}>Save Now</Text>
         </TouchableOpacity>
      </SafeAreaView>
  )
}
export default Profile

const styles = StyleSheet.create({
  btnText:{
    fontSize:16,
    color:'#fff'
  },
  btn:{
  backgroundColor:'#4ca6a8',
  height:54,
  borderRadius:12,
  alignItems:'center',
  justifyContent:'center',
  margin:10
  },
  informationContainer:{
    // backgroundColor:'yellow',
    margin:10
  },
  text:{
    marginVertical:10,
    fontSize:16,
    color:'#6A6A6A'
  },
  input:{
    borderRadius:5,
    height:45,
    padding:5,
    borderWidth:1,
    borderColor:'#6A6A6A',
    color:'black',
    // backgroundColor:'gold',
    marginLeft:15,
    marginVertical:5
  },
  edit:{
    fontSize:14,
    color:'#6A6A6A',
    alignSelf:'center'
  },
  name:{
    fontSize:30,
    color:'#1A1D1E',
    justifyContent:'center',
    alignSelf:'center'
  },
  container:{
    // backgroundColor:'gold',
    height:220,
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    margin:10
  }
})