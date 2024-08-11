import {React,forwardRef} from 'react';

import {View,StyleSheet,TextInput} from'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import COLORS from '../constantes/colors';
import RechercheItems from '../fonctions/RechercheItem';


const SearchBarProduit=({value,onChange})=>{
    return(
            <View style={{backgroundColor:COLORS.light, height:hp(7),justifyContent:'center',flex:1,borderRadius:15,marginRight:hp(2),marginTop:hp(0.5)}}>
                <TextInput value={value} onChangeText={onChange} placeholder='Rechercher un produit' placeholderTextColor={'gray'} style={{paddingLeft:hp(30),paddingLeft:hp(2)}}></TextInput>
            </View>
    )
};



export default SearchBarProduit;