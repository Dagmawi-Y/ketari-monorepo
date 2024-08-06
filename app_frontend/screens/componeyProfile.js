import { 
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const CompneyProfile = () => {
  const navigation = useNavigation();
  return (
      <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image 
            source={require('../assets/3327.png')}
            style={styles.img}
            />
          </View>
          
          <ScrollView>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Componey Description</Text>
            </View>
            <View style={styles.DescriptionContainer}>
              <Text style={{color:'black'}}> Componey Description Goes here </Text>
            </View>
          </ScrollView>

          <TouchableOpacity
         style={styles.btn}
         onPress={()=>navigation.navigate('Apply')}
         >
          <Text style={styles.btnText}>Apply</Text>
         </TouchableOpacity>
      </View>

 )
}
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
  DescriptionContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    // backgroundColor:'red'
    },
  headerText:{
    color:'black',
    fontSize:16,
  },
  headerContainer:{
    marginVertical:10,
    // backgroundColor:'yellow',
    height:50,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:2,
    borderColor:'6a6a6a',
    marginHorizontal:3
  },
  img:{
    flex:1,
    width:'100%',
    height:'100%'
  },
  imgContainer:{
    height:250,
    // backgroundColor:'green',
    marginTop:10
  },   
  container:{
      flex:1,
      // backgroundColor:'gold',
   }  
})
export default CompneyProfile
  



                  
            





    
    
 
