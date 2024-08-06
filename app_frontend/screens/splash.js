import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.splash}>
      <Text style={styles.findAPerfact}>Find a Perfect Job Match</Text>
      <Text style={[styles.findingYourDream, styles.letsGetStartedTypo]}>
        Finding your dream job is easier and faster with StaffMerge
      </Text>
      <View style={[styles.btn, styles.btnLayout]}>
        <View style={[styles.btnChild, styles.childPosition]} />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.letsGetStarted, styles.letsGetStartedPosition]}>
            Let’s Get Started
          </Text>
        </TouchableOpacity>
        <Image
          style={[styles.arrowRightIcon, styles.letsGetStartedPosition]}
          resizeMode="cover"
          source={require('../assets/arrowright.png')}
        />
      </View>
      <Image
        style={[styles.splashChild, styles.childPosition]}
        resizeMode="cover"
        source={require('../assets/group-1000000728.png')}
      />
      <Image
        style={styles.logoIcon}
        resizeMode="cover"
        source={require('../assets/StaffMerge.png')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  letsGetStartedTypo: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    textAlign: 'center',
  },
  btnLayout: {
    height: 54,
    width: 261,
  },
  childPosition: {
    left: 0,
    position: 'absolute',
  },
  letsGetStartedPosition: {
    position: 'absolute',
  },
  findAPerfact: {
    top: 506,
    left: 64,
    fontSize: 34,
    lineHeight: 44,
    fontWeight: '600',
    // fontFamily: "Poppins-SemiBold",
    color: '#1a1d1e',
    width: 246,
    textAlign: 'center',
    position: 'absolute',
  },
  findingYourDream: {
    top: 599,
    left: 35,
    lineHeight: 26,
    color: '#6a6a6a',
    width: 304,
    position: 'absolute',
  },
  btnChild: {
    top: 0,
    borderRadius: 12,
    backgroundColor: '#4ca6a8',
    height: 54,
    width: 261,
  },
  letsGetStarted: {
    left: 52,
    lineHeight: 21,
    color: '#fff',
    // fontFamily: "Poppins-Regular",
    fontSize: 16,
    textAlign: 'center',
  },
  arrowRightIcon: {
    left: 189,
    width: 20,
    height: 20,
  },
  btn: {
    top: 691,
    left: 57,
    position: 'absolute',
  },
  splashChild: {
    top: 66,
    width: 375,
    height: 378,
  },
  logoIcon: {
    marginTop: 2,
    marginLeft: 3,
    height: '4.08%',
    width: '40.13%',
    top: '2.46%',
    right: '88.53%',
    bottom: '94.36%',
    left: '5.33%',
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  splash: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: 812,
    overflow: 'hidden',
  },
});

export default Splash;
