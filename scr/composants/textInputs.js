import React from 'react';

import { StyleSheet, TextInput, View } from'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import COLORS from '../constantes/colors';


const TextInputs=({placeholder,keyboardType,secureText})=>{

    
    return(
        <View >
            <TextInput
                style={{height: hp(7), width:hp(43),borderColor:COLORS.light,borderWidth:1,backgroundColor: COLORS.light, borderRadius: wp(2), paddingLeft: wp(7), marginVertical:hp(1)}}
                placeholder={placeholder}
                keyboardType={keyboardType}
                secureTextEntry ={secureText}
                autoCapitalize='auto'
            />
        </View>

    )

};

export default TextInputs;