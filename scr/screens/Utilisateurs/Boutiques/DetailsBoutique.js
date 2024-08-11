


import React from'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet, Text, View, Image, Button , SafeAreaView,TouchableOpacity } from'react-native';
import Retour from '../../../composants/retour';

function DetailsBoutique({navigation,route}) {
    const boutique = route.params;
    return(
        <SafeAreaView>
            <View style={{flexDirection:'row',}}>
                <Retour />
                <Text style={{fontSize:hp(2.9), fontWeight:'600',marginTop:hp(2)}}>{boutique.nom}</Text>
            </View>
            <View>


        
            </View>
        </SafeAreaView>
    );
}

export default DetailsBoutique;