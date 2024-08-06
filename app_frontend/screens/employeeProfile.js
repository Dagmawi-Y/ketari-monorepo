import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Employeeprofile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Employee Profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    color:'black',
    fontSize:16
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
export default Employeeprofile