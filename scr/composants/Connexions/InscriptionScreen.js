import React from 'react';
import { View, Text, SafeAreaView, TextInput, Alert } from 'react-native';
import COLORS from '../../constantes/colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Retour from '../retour';
import TextInputs from '../textInputs';





const InscriptionScreen =({navigation})=>{
function Inscription() {
   alert( ' erreur de connexion');

}

    return(

        <SafeAreaView style={{flex:1, backgroundColor:COLORS.white}} >
            <View>
                <Retour />
                <View style={{ marginTop:hp(5),marginBottom:hp(5), alignItems:'center'}} >
                    <Text style={{color:COLORS.black, fontWeight:'600', fontSize:hp(3)}}>Inscrivez-vous</Text>
                </View>

                {/* les inputs  */}

                <View style={{marginHorizontal:hp(2),alignSelf:'center' }}>
                    {/* input utilisateur */}
                    <TextInputs placeholder='Nom et Prénom ' keyboardType={'default'}  />
                    <TextInputs placeholder='Email' keyboardType={'email-address'}  />
                    <TextInputs placeholder='Mot de passe'  keyboardType={'default'} secureText={true}  />
                    <TextInputs placeholder='Confirmer le mot de passe'  keyboardType={'default'} secureText={true} />
                    {/*<TextInputs placeholder='Email ou numero de téléphone ' />*/}

                </View>

                    <View style={{alignItems:'center'}}>
                        <View style={{width:hp(40), height:hp(7), backgroundColor:COLORS.orange, justifyContent:'center', alignItems:'center', borderRadius:5, marginTop:hp(3)}}>
                            <Text style={{color:COLORS.white, fontWeight:'bold', fontSize:hp(3)}} onPress={Inscription}>S'inscrire</Text>
                        </View>  
                    </View>

                    <View style={{alignItems:'center', marginVertical:hp(3)}}>
                        <Text style={{color: COLORS.grey, marginVertical:hp(2), fontSize:hp(2)}}>Pas encore de compte? Créez-en un gratuitement</Text>
                        <Text style={{color: COLORS.orange1, fontWeight:'bold', marginTop:hp(1), fontSize:hp(2.5)}} onPress={()=>navigation.navigate('Connexion')}>Connectez-vous</Text>
                    </View>



            </View>

                

        </SafeAreaView>
    )
}

export default InscriptionScreen;