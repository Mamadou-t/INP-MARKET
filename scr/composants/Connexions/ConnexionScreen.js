import React from 'react';

import { View, Text, SafeAreaView, TextInput,TouchableOpacity } from 'react-native';
import COLORS from '../../constantes/colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Retour from '../retour';
import { useNavigation } from '@react-navigation/native';



const ConnexionScreen =()=>{
    const navigation= useNavigation();
    return(

        <SafeAreaView style={{flex:1, backgroundColor:COLORS.white}} >
            <View style={{}}>
                <View style={{marginHorizontal:hp(2.5), marginTop:hp(13),marginBottom:hp(5)}} >
                    <Text style={{color:COLORS.black, fontWeight:'600', fontSize:hp(3)}}>Bienvenue à  <Text style={{color:COLORS.orange, fontWeight:'bold', fontSize:hp(4)}}>INP MARKET</Text> </Text>
                    <Text style={{color:COLORS.grey, marginVertical:hp(2), fontSize:hp(2)}}>Connectez-vous pour profiter de nos offres et services</Text>
                </View>

                {/* les inputs  */}

                <View style={{alignSelf:'center' }}>
                    {/* input utilisateur */}
                    <View >
                        <TextInput
                            style={{height: hp(7), width:hp(43),borderColor:COLORS.light,borderWidth:1,backgroundColor: COLORS.light, borderRadius: wp(2), paddingLeft: wp(7), marginVertical:hp(3)}}
                            placeholder="Email ou Nom d'utilisateur"
                            keyboardType='email-address'
                            autoCapitalize="none"
                        
                        />
                    </View>

                    <View >
                        <TextInput
                            style={{height: hp(7), width:hp(43),borderColor:COLORS.light,borderWidth:1,  backgroundColor: COLORS.light, borderRadius: wp(2), paddingLeft: wp(7)}}
                            placeholder="Mot de passe"
                            secureTextEntry = {true}
                            autoCapitalize="none"
                            
                        />
                    </View>

                    <Text style={{color:COLORS.orange1, fontWeight:'bold',marginVertical:hp(3) }}>Mot de passe oublié ?</Text>

                </View>

                    <View style={{alignItems:'center'}}>
                        <TouchableOpacity  onPress={()=>navigation.replace('Home')} activeOpacity={0.8}>
                            <View style={{width:hp(40), height:hp(7), backgroundColor:COLORS.orange, justifyContent:'center', alignItems:'center', borderRadius:5, marginTop:hp(3)}}>
                                <Text style={{color:COLORS.white, fontWeight:'bold', fontSize:hp(3)}}>Connexion</Text>
                            </View>  
                        </TouchableOpacity>
                    </View>

                    <View style={{alignItems:'center', marginVertical:hp(3)}}>
                        <Text style={{color: COLORS.grey, marginVertical:hp(2), fontSize:hp(2)}}>Pas encore de compte? Créez-en un gratuitement</Text>
                        <Text style={{color: COLORS.orange1, fontWeight:'bold', marginTop:hp(1), fontSize:hp(2.5)}} onPress={()=>navigation.navigate('Inscription')}>S'inscrire</Text>
                    </View>



            </View>

                

        </SafeAreaView>
    )
}

export default ConnexionScreen;