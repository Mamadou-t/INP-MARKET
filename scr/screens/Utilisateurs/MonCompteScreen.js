
import React from 'react';

import { View, Text,SafeAreaView } from'react-native';
import COLORS from '../../constantes/colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Retour from '../../composants/retour';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
function MonCompteScreen (){
    return(
        <SafeAreaView style={{flex:1, backgroundColor:COLORS.white}} >
            <View style={{flexDirection:'row',marginVertical:hp(3) ,marginHorizontal:hp(2),alignItems:'center'}}>
                <Text style={{fontSize:hp(3),fontWeight:'700'}} >Profile</Text>
            </View>   

                <View style={{padding:hp(5),backgroundColor:COLORS.grey,borderRadius:100,justifyContent:'center',alignItems:'center',borderRadius:100,alignSelf:'center'}}>
                    <Ionicons name="person" size={50} color="black" />
                </View> 
                <View style={{flexDirection:'column',marginTop:hp(5)}}>
                    <View style={{flexDirection:'row',marginHorizontal:hp(2),marginVertical:hp(1.5),justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}>
                            <Ionicons name="person" size={24} color="black" />
                            <Text style={{fontSize:hp(2.3), marginLeft:hp(2)}}>Informations sur mon profile</Text>
                        </View>
                        <MaterialIcons name="navigate-next" size={28} color="black" />
                    </View>
                    
                    <View style={{flexDirection:'row',marginHorizontal:hp(2),marginVertical:hp(1.5),justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}>
                            <Ionicons name="person" size={24} color="black" />
                            <Text style={{fontSize:hp(2.3), marginLeft:hp(2)}}>Mes Commandes</Text>
                        </View>
                        <MaterialIcons name="navigate-next" size={28} color="black" />
                    </View>
                    
                    <View style={{flexDirection:'row',marginHorizontal:hp(2),marginVertical:hp(1.5),justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}>
                            <Ionicons name="person" size={24} color="black" />
                            <Text style={{fontSize:hp(2.3), marginLeft:hp(2)}}>Vendeurs suivis</Text>
                        </View>
                        <MaterialIcons name="navigate-next" size={28} color="black" />
                    </View>
                    
                    <View style={{flexDirection:'row',marginHorizontal:hp(2),marginVertical:hp(1.5),justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}>
                            <Ionicons name="person" size={24} color="black" />
                            <Text style={{fontSize:hp(2.3), marginLeft:hp(2)}}>Mes Boutiques</Text>
                        </View>
                        <MaterialIcons name="navigate-next" size={28} color="black" />
                    </View>
                    
                    <View style={{flexDirection:'row',marginHorizontal:hp(2),marginVertical:hp(1.5),justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}>
                            <Ionicons name="person" size={24} color="black" />
                            <Text style={{fontSize:hp(2.3), marginLeft:hp(2)}}>Mes Services</Text>
                        </View>
                        <MaterialIcons name="navigate-next" size={28} color="black" />
                    </View>
                    
                    
                    

                </View>
        </SafeAreaView>
    )

};

export default MonCompteScreen;