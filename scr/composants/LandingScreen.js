
import {React, useState,useEffect} from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {  View, Text, SafeAreaView,StyleSheet, TextInput, TouchableOpacity, FlatList, Dimensions, Image, StatusBar } from 'react-native';
import  COLORS  from '../constantes/colors';


function LandingScreen({navigation}){
    
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace("Connexion");
        }, 1000); // 3 seconds delay
        return () => clearTimeout(timer);
      }, [navigation]);

    return (


        <SafeAreaView style={{ flex:1,backgroundColor:COLORS.belge}}>   
            <View style={{justifyContent:'center', alignItems:'center', flex:1,  }}>
                    <Image source={require('../assets/LOGO.png')}  style={{height:200,width:200,borderRadius:200}} />
                    <Text style={{fontSize:hp(5), fontWeight:'bold',fontStyle:'italic', color:COLORS.grey, marginTop:20 }}>INP MARKET</Text>
            </View>
        </SafeAreaView>
    );
};


const style=StyleSheet.create({

    linearGradient: {
        flex: 1,
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
 
});
export default LandingScreen;