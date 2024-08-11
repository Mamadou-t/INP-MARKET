import React from 'react';

import {View,StyleSheet,TextInput} from'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


import COLORS from '../constantes/colors';




const SearchBar=()=>{
    return(
        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:hp(4)}}>
            <View style={style.searchContainer}>
                <TextInput  placeholder='Rechercher un produit' placeholderTextColor={'gray'} style={style.input}></TextInput>
                <Ionicons name='search' size={25} style={{right:hp(0.6), padding:hp(1),backgroundColor:COLORS.belge,borderRadius:50}} />
          </View>
        </View>
    )
};


const style=StyleSheet.create({
    searchContainer:{
        flex:1 ,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:COLORS.light,
        borderRadius:50,
        height:hp(7),
        marginHorizontal:hp(2),
    },
    input:{
        flex:1,
        paddingHorizontal:hp(5),
        fontSize:hp(2),
        fontWeight:'bold',
        color:COLORS.black,
      },
    
    });

export default SearchBar;