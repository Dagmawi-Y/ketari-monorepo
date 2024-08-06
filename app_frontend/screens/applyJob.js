import { 
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const AplyJob = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imgContainer}>
          <Image 
            source={require('../assets/3327.png')}
            style={styles.img}
          />
        </View>
          
        <View style={styles.content}>
          <Text style={styles.heading}>Company Name: Google</Text>
          <Text style={styles.heading}>Position Title: Lead Product Manager</Text>
          <Text style={styles.heading}>Job Description:</Text>
          <View style={styles.bulletPoints}>
            <Text style={styles.bulletText}>- Conduct market research and analyze user data to identify product opportunities</Text>
            <Text style={styles.bulletText}>- Define product vision, strategy, and roadmap</Text>
            <Text style={styles.bulletText}>- Collaborate with cross-functional teams to design and develop new products</Text>
            <Text style={styles.bulletText}>- Lead and mentor a team of product managers</Text>
          </View>
          <Text style={styles.heading}>Qualifications:</Text>
          <View style={styles.bulletPoints}>
            <Text style={styles.bulletText}>- Bachelor's degree in a relevant field</Text>
            <Text style={styles.bulletText}>- Minimum of 5 years of product management experience</Text>
            <Text style={styles.bulletText}>- Strong leadership and communication skills</Text>
            <Text style={styles.bulletText}>- Experience in agile development methodologies</Text>
          </View>
        </View>       
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Apply')}
        >
          <Text style={styles.btnText}>Apply</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  content: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 20
  },
  heading: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10
  },
  bulletPoints: {
    marginLeft: 20
  },
  bulletText: {
    color: 'black',
    fontSize: 16,
    marginBottom: 5
  },
  btnText: {
    fontSize: 16,
    color: '#fff'
  },
  btn: {
    backgroundColor: '#4ca6a8',
    height: 54,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  img: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  imgContainer: {
    height: 250,
    marginTop: 10
  }
})

export default AplyJob