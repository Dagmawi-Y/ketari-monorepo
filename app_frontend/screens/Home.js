import React from "react";
import  {useState} from 'react'
import { useNavigation } from "@react-navigation/native";

import { 
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    Image,
    TextInput 
} from "react-native";
export default function Home(){
    const [searchValue,setSearchValue] = useState('');
    const navigation = useNavigation();
    return(
        <SafeAreaView style={styles.container}>
            
            <View style={{height:50,flexDirection:'row',alignItems:'center',gap:8,marginVertical:5}}>
                <View style={{flex:1}}>
                    <Image source={require('../assets/StaffMerge.png')} style={{}}/>
                </View>
                <TouchableOpacity style={{height:50,aspectRatio:1,borderRadius:50,borderWidth:1,borderColor:'#D9D9D9',justifyContent:'center',alignItems:'center'}}>
                 <Image source={require('../assets/notification.png')} />
                </TouchableOpacity>
            </View>
            
            <View style={styles.headerContainer}>
                <View style={styles.textInput}>
                <TextInput placeholder="Search here..."
                value={searchValue}
                onChangeText={(value)=>setSearchValue(value)}
                
                placeholderTextColor={'gray'}
                />
                </View>
            <View style={styles.icon}>
                <TouchableOpacity>
            <Image style={styles.img} source={require('../assets/category.png')} />
            </TouchableOpacity>
             </View>       
           </View>
            
            <View style={styles.headerTextContainer}> 
            <View style={{flex:1}}>
                <Text style={styles.textHeader}>Popular Job</Text>
            </View>
            
            <TouchableOpacity>
            <View style={{marginTop:4}}>
            <Text style={styles.textShowAll}>Show All</Text>
            </View>
            </TouchableOpacity> 
            </View>
          
          {/* Componey Card */}
          <ScrollView
             horizontal
             showsHorizontalScrollIndicator={false}
          
          > 
          <TouchableOpacity
          onPress={()=>navigation.navigate('Apply')}
          >
          <View style={styles.ComponeyCardContainer}>
            <View style={styles.componeyCardImageContainer}>
             <Image style={styles.componeyImage}source={require('../assets/google.png')} />
             <Text style={styles.componeyName}>Google</Text>
            </View>

        <Text style={styles.JobTitile}>Lead Product Manager</Text>
        <Text style={styles.JobSalary}>$2500/m <Text style={styles.JobPlace}> Toronto,Canada </Text></Text>
        </View>   
          </TouchableOpacity>

          <TouchableOpacity
                    onPress={()=>navigation.navigate('Apply')}
                    >
          <View style={styles.ComponeyCardContainer}>
            <View style={styles.componeyCardImageContainer}>
             <Image style={styles.componeyImage}source={require('../assets/facebook.png')} />
             <Text style={styles.componeyName}>Google</Text>
            </View>

        <Text style={styles.JobTitile}>Lead Product Manager</Text>
        <Text style={styles.JobSalary}>$2500/m <Text style={styles.JobPlace}> Toronto,Canada </Text></Text>
            
          </View>

          </TouchableOpacity>

          <TouchableOpacity
                    onPress={()=>navigation.navigate('Apply')}
                    >
          <View style={styles.ComponeyCardContainer}>
            <View style={styles.componeyCardImageContainer}>
             <Image style={styles.componeyImage}source={require('../assets/google.png')} />
             <Text style={styles.componeyName}>Google</Text>
            </View>

        <Text style={styles.JobTitile}>Lead Product Manager</Text>
        <Text style={styles.JobSalary}>$2500/m <Text style={styles.JobPlace}> Toronto,Canada </Text></Text>
            
          </View>

          </TouchableOpacity>
           
          



          </ScrollView>
          
             {/* Recent Post */}
                
                             
            <View style={styles.headerTextContainer}> 
            <View style={{flex:1}}>
                <Text style={styles.textHeader}>Recent Job</Text>
            </View>
            
            <TouchableOpacity>
            <View style={{marginTop:4}}>
            <Text style={styles.textShowAll}>Show All</Text>
            </View>
            </TouchableOpacity> 
            </View>
                

            <ScrollView
             vertical
            showsVerticalScrollIndicator={true}
            >
            <TouchableOpacity
                      onPress={()=>navigation.navigate('Apply')}
                      >

            <View style={styles.recentPostContainer} >
                   <View style={styles.recentImage}>
                   <Image source={require('../assets/facebook.png')} />

                   </View>

                   <View style={styles.recentJobDescription}> 
                   <Text style={styles.JobDescriptionText}>UI/UX Designer</Text>
                    <Text style={styles.JobDescriptionText}>Full Time</Text>
                   </View> 
                   <View style={styles.recentSalary}>
                   <Text style={styles.SaleryText}>$4500/m</Text>

                   </View> 
                </View>

            </TouchableOpacity>


            <TouchableOpacity
                      onPress={()=>navigation.navigate('Apply')}
                      >

            <View style={styles.recentPostContainer} >
                   <View style={styles.recentImage}>
                   <Image source={require('../assets/facebook.png')} />

                   </View>

                   <View style={styles.recentJobDescription}> 
                   <Text style={styles.JobDescriptionText}>UI/UX Designer</Text>
                    <Text style={styles.JobDescriptionText}>Full Time</Text>
                   </View> 
                   <View style={styles.recentSalary}>
                   <Text style={styles.SaleryText}>$4500/m</Text>

                   </View> 
                </View>

            </TouchableOpacity>    
            
            
            <TouchableOpacity
                      onPress={()=>navigation.navigate('Apply')}
                      >

            <View style={styles.recentPostContainer} >
                   <View style={styles.recentImage}>
                   <Image source={require('../assets/facebook.png')} />

                   </View>

                   <View style={styles.recentJobDescription}> 
                   <Text style={styles.JobDescriptionText}>UI/UX Designer</Text>
                    <Text style={styles.JobDescriptionText}>Full Time</Text>
                   </View> 
                   <View style={styles.recentSalary}>
                   <Text style={styles.SaleryText}>$4500/m</Text>

                   </View> 
                </View>

            </TouchableOpacity>    
            <TouchableOpacity
                      onPress={()=>navigation.navigate('Apply')}
                      >

            <View style={styles.recentPostContainer} >
                   <View style={styles.recentImage}>
                   <Image source={require('../assets/facebook.png')} />

                   </View>

                   <View style={styles.recentJobDescription}> 
                   <Text style={styles.JobDescriptionText}>UI/UX Designer</Text>
                    <Text style={styles.JobDescriptionText}>Full Time</Text>
                   </View> 
                   <View style={styles.recentSalary}>
                   <Text style={styles.SaleryText}>$4500/m</Text>

                   </View> 
                </View>

            </TouchableOpacity>    
            <TouchableOpacity
                      onPress={()=>navigation.navigate('Apply')}
                      >

            <View style={styles.recentPostContainer} >
                   <View style={styles.recentImage}>
                   <Image source={require('../assets/facebook.png')} />

                   </View>

                   <View style={styles.recentJobDescription}> 
                   <Text style={styles.JobDescriptionText}>UI/UX Designer</Text>
                    <Text style={styles.JobDescriptionText}>Full Time</Text>
                   </View> 
                   <View style={styles.recentSalary}>
                   <Text style={styles.SaleryText}>$4500/m</Text>

                   </View> 
                </View>

            </TouchableOpacity>    
            <TouchableOpacity
                      onPress={()=>navigation.navigate('Apply')}
                      >

            <View style={styles.recentPostContainer} >
                   <View style={styles.recentImage}>
                   <Image source={require('../assets/facebook.png')} />

                   </View>

                   <View style={styles.recentJobDescription}> 
                   <Text style={styles.JobDescriptionText}>UI/UX Designer</Text>
                    <Text style={styles.JobDescriptionText}>Full Time</Text>
                   </View> 
                   <View style={styles.recentSalary}>
                   <Text style={styles.SaleryText}>$4500/m</Text>

                   </View> 
                </View>
                
            </TouchableOpacity>    
            <TouchableOpacity
                      onPress={()=>navigation.navigate('Apply')}
                      >

            <View style={styles.recentPostContainer} >
                   <View style={styles.recentImage}>
                   <Image source={require('../assets/facebook.png')} />

                   </View>

                   <View style={styles.recentJobDescription}> 
                   <Text style={styles.JobDescriptionText}>UI/UX Designer</Text>
                    <Text style={styles.JobDescriptionText}>Full Time</Text>
                   </View> 
                   <View style={styles.recentSalary}>
                   <Text style={styles.SaleryText}>$4500/m</Text>

                   </View> 
                </View>

            </TouchableOpacity>    
            </ScrollView>
            
         </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    recentImage:{
     width:15,
     marginRight:25,
     height:15
    },
    recentJobDescription:{
      flex:1,
      
    },
    JobDescriptionText:{
        color:'#1A1D1E',
        fontSize:16
    },
    recentSalary:{
    alignSelf:'center',
    marginRight:5
    },
    JobPlace:{
    color:'#6A6A6A',

    },
    JobSalary:{
        color:'#151313'
    },  
    JobTitile:{
    color:'#151313',
    marginVertical:10,
    fontSize:16,
    },
   componeyName:{
    fontSize:16,
    color:'#6A6A6A',
    marginBottom:2
   },
    componeyImage: { 
    height:50,
    width:50
    },
   componeyCardImageContainer:{
    height:60,
   },
    ComponeyCardContainer:{
    // backgroundColor:'gold',
    height:150,
    width:250,
    paddingVertical:15,
    paddingHorizontal:5,
    borderRadius:15,
    marginVertical:10,
    marginHorizontal:10,
    borderWidth:1,
    borderColor:'#6A6A6A',
    marginBottom:245
   },
   SaleryText:{
    color:'black'
   },
    JobDescriptionText:{
   color:'black'
   },

   recentPostContainer:{
    flex:1,
   flexDirection:'row',
//    backgroundColor:'orange',
   height:70,
   padding:5,
   borderRadius:15,
   borderWidth:2,
   borderColor:'#6A6A6A',
   marginVertical:10
},
    
    normalText:{
        color:'black'
    },
    container:{
    paddingHorizontal:10,
    color:'black',
    flex:1
    },  
    headerContainer:{
        flexDirection:'row',
        // backgroundColor:'yellow',
        height:60,
        alignContent:'center',
        borderBottomWidth:2,
        borderBottomColor:'black',
        
    },
    textInput:{
        flex:1,
        alignSelf:'center',

        
    },
    icon:{
      alignSelf:'center',
      marginLeft:5,
      backgroundColor:'#4CA6A8',
      borderRadius:5,
      width:45,
      height:45,
      justifyContent:'center'
    },
    img:{
      alignSelf:'center',
      justifyContent:'center'
    },
    textHeader:{
    color:'black',
    // fontWeight:600,
    fontSize:20,
    flex:1
     },
     textShowAll:{
     color:'black',
     fontSize:12,
     alignSelf:'center'
     },
    headerTextContainer:{
    flexDirection:'row',
    marginVertical:20,
    height:50,
    // backgroundColor:'gold',
    padding:10,
    borderBottomWidth:2,
    borderBottomColor:'gold',
    borderLeftWidth:1,
    borderLeftColor:'gold',
    borderBottomLeftRadius:15
    }

})