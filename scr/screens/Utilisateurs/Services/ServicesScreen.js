
import React from "react";
import { View,Text, SafeAreaView ,TouchableOpacity} from "react-native";
import COLORS from "../../../constantes/colors";
import Retour from "../../../composants/retour";
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ServiceItems from "../../../composants/ServicesItems";
import { SERVICES } from "../../../constantes/Services";


function ServicesScreen({navigation}) {
    return(

         <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
            <View style={{justifyContent:'space-between',flexDirection:'row',marginTop:hp(1.5)}}>
                <View style={{flexDirection:'row'}}>
                    <Retour />
                    <Text style={{fontSize:hp(3),fontWeight:'bold',marginTop:hp(1.6)}}>Services</Text>
                </View>
                <View style={{flexDirection:'row',marginVertical:hp(2),marginHorizontal:hp(2)}}>
                    <TouchableOpacity style={{paddingHorizontal:hp(2)}} onPress={()=>navigation.navigate('Rechercher_Produits',SERVICES)}>
                        <Fontisto name="search" size={27} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity style={{paddingHorizontal:hp(2)}}>
                    <Ionicons name="cart" size={30} color="black" />
                    </TouchableOpacity>
                </View>

            </View>

            <View>
                <ServiceItems />
            </View>

         </SafeAreaView>
    );
    
}; 

export default ServicesScreen;