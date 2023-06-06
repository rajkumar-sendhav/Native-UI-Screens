import React from 'react';
import {
 StyleSheet,
 Text,
 View,
 TextInput,
 Keyboard,
 TouchableWithoutFeedback,
 TouchableOpacity,
} from 'react-native';

// expo install expo-font
import { useFonts } from 'expo-font';

// expo install expo-linear-gradient
import { LinearGradient } from 'expo-linear-gradient';

// npm i react-native-elements
import { Icon } from 'react-native-elements';

import NunitoLight from '../../assets/fonts/NunitoSans/NunitoSansLight.ttf';
import NunitoBold from '../../assets/fonts/NunitoSans/NunitoSansBold.ttf';
import NunitoExtraBold from '../../assets/fonts/NunitoSans/NunitoSansExtraBold.ttf';

export default function LoginScreen5() {
 const [loaded] = useFonts({
 NunitoLight,
 NunitoBold,
 NunitoExtraBold,
 });

 if (!loaded) {
 return (
 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
 <Text>Loading...</Text>
 </View>
 );
 }

 return (
 <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
 <LinearGradient style={styles.container} colors={['#333', '#303030']}>
 {/* Welcome Text */}
 <Text
 style={{
 color: '#fff',
 fontSize: 30,
 fontFamily: 'NunitoExtraBold',
 }}
 >
 welcome back!
 </Text>
 {/* Enter your number Text */}
 <Text
 style={{
 color: '#fff',
 fontSize: 24,
 marginTop: 14,
 fontFamily: 'NunitoBold',
 }}
 >
 enter your number
 </Text>
 {/* Number Input */}
 <View style={styles.inputTopMorph}>
 <View style={styles.inputBottomMorph}>
 <TextInput
 style={styles.input}
 textContentType='telephoneNumber'
 keyboardType='phone-pad'
 placeholderTextColor={'#8c8c8c'}
 placeholder={'9998887770'}
 />
 </View>
 </View>
 {/* Continue Button */}
 <TouchableOpacity style={styles.buttonOpacity}>
 <View style={styles.buttonView}>
 <Text style={styles.buttonText}>continue</Text>
 </View>
 </TouchableOpacity>
 {/* New User or Forgot Password */}
 <View
 style={{
 flexDirection: 'row',
 justifyContent: 'space-between',
 marginTop: 20,
 }}
 >
 <Text
 style={{
 color: '#fafafa',
 fontSize: 18,
 fontFamily: 'NunitoLight',
 }}
 >
 New User?
 </Text>
 <Text
 style={{
 color: '#fafafa',
 fontSize: 18,
 fontFamily: 'NunitoLight',
 }}
 >
 Forgot Password?
 </Text>
 </View>
 {/* Social Login */}
 <View
 style={{
 flexDirection: 'row',
 justifyContent: 'center',
 marginTop: 40,
 }}
 >
 <TouchableOpacity style={styles.iconTouchable}>
 <View style={styles.iconView}>
 <Icon name='google' type='font-awesome' color='#fafafa' />
 </View>
 </TouchableOpacity>
 <TouchableOpacity style={styles.iconTouchable}>
 <View style={styles.iconView}>
 <Icon
 name='facebook-square'
 type='font-awesome'
 color='#fafafa'
 />
 </View>
 </TouchableOpacity>
 <TouchableOpacity style={styles.iconTouchable}>
 <View style={styles.iconView}>
 <Icon name='twitter' type='font-awesome' color='#fafafa' />
 </View>
 </TouchableOpacity>
 </View>
 </LinearGradient>
 </TouchableWithoutFeedback>
 );
}

const styles = StyleSheet.create({
 container: {
 flex: 1,
 paddingTop: 60,
 paddingHorizontal: 20,
 },
 inputTopMorph: {
 width: '100%',
 height: 50,
 marginTop: 20,
 borderRadius: 10,
 backgroundColor: '#333',
 elevation: 5,
 shadowOffset: {
 width: -12,
 height: -12,
 },
 shadowOpacity: 1,
 shadowRadius: 6,
 shadowColor: '#252525',
 },
 inputBottomMorph: {
 backgroundColor: '#333',
 borderRadius: 10,
 shadowOffset: {
 width: 6,
 height: 6,
 },
 shadowOpacity: 1,
 shadowRadius: 6,
 shadowColor: '#414141',
 },
 input: {
 width: '100%',
 height: 50,
 fontSize: 18,
 paddingHorizontal: 10,
 fontFamily: 'NunitoLight',
 color: '#f1f3f6',
 },
 buttonOpacity: {
 width: '100%',
 height: 50,
 marginTop: 22,
 borderRadius: 10,
 backgroundColor: '#2e2e2e',
 elevation: 5,
 shadowOffset: {
 width: -6,
 height: -6,
 },
 shadowOpacity: 1,
 shadowRadius: 6,
 shadowColor: '#1d1d1d',
 },
 buttonView: {
 backgroundColor: '#2e2e2e',
 borderRadius: 10,
 shadowOffset: {
 width: 6,
 height: 6,
 },
 shadowOpacity: 1,
 shadowRadius: 6,
 shadowColor: '#3f3f3f',
 },
 buttonText: {
 fontFamily: 'NunitoBold',
 fontSize: 20,
 color: '#fafafa',
 marginVertical: 10,
 textAlign: 'center',
 },
 iconTouchable: {
 borderRadius: 10,
 backgroundColor: '#2e2e2e',
 elevation: 5,
 shadowOffset: {
 width: -6,
 height: -6,
 },
 shadowOpacity: 1,
 shadowRadius: 6,
 shadowColor: '#1d1d1d',
 marginHorizontal: 10,
 },
 iconView: {
 backgroundColor: '#2e2e2e',
 borderRadius: 10,
 shadowOffset: {
 width: 6,
 height: 6,
 },
 shadowOpacity: 1,
 shadowRadius: 6,
 shadowColor: '#3f3f3f',
 padding: 14,
 },
});