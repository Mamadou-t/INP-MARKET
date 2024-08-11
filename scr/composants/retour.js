
import React from 'react';
import { AntDesign,Fontisto,FontAwesome6,MaterialIcons } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'; 

import {TouchableOpacity, View} from'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';


const Retour=()=>{  
    const navigation = useNavigation();
    return(
        <View>
        <TouchableOpacity onPress={()=>navigation.goBack()} >
            <View style={{paddingVertical:hp(2),paddingHorizontal:hp(2)}}>
                <Ionicons name="chevron-back-sharp" size={30} color="black" />
            </View>

        </TouchableOpacity>

        </View>
    )
};

export default Retour;