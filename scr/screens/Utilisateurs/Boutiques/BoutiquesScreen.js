
import React from 'react';

import { View, Text, SafeAreaView, TouchableOpacity } from'react-native';
import COLORS from '../../../constantes/colors';
import Retour from '../../../composants/retour';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/Fontisto';
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';
import BoutiqueItems from '../../../composants/BoutiquesItems';
import Header from '../../../composants/header';
import { BOUTIQUES } from '../../../constantes/Boutiques';


function BoutiquesScreen ({navigation}){
    return(
        <SafeAreaView style={{backgroundColor:COLORS.white,flex:1}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row', marginVertical:hp(3)}}>
                    <Text style={{fontSize:hp(3), fontWeight:'bold',marginHorizontal:hp(2)}}>Boutiques</Text>
                </View>

                <View style={{flexDirection:'row',marginHorizontal:hp(2),marginVertical:hp(3)}}  >
                        <TouchableOpacity style={{paddingHorizontal:hp(2)}} onPress={()=>navigation.navigate('Rechercher_Produits',BOUTIQUES)}>
                            <Fontisto name="search" size={27} color="black" />
                        </TouchableOpacity>
                        <Header />
                </View>

                

            </View>
            <TouchableOpacity style={{marginVertical:hp(1.6),marginHorizontal:hp(3),padding:hp(1),flexDirection:'row',justifyContent:'flex-end'}} onPress={()=>navigation.navigate('Services')}>
                            <Text style={{fontSize:15, color:COLORS.blue, fontWeight:'bold', marginLeft:wp(2)}}>Services</Text>
                            <MaterialIcons name="navigate-next" size={27} color="black" style={{bottom:hp(0.3)}} />
            </TouchableOpacity>

            <View style={{marginVertical:hp(2)}}>
                <BoutiqueItems />
            </View>


        </SafeAreaView>
    )

};

export default BoutiquesScreen;