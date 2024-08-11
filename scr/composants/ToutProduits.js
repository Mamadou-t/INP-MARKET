import {React, useState} from 'react';
import {  View, Text, SafeAreaView,StyleSheet, TextInput, TouchableOpacity, FlatList, Dimensions, Image, ScrollView, StatusBar } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {CategoryData} from '../constantes/categories';
import COLORS from '../constantes/colors';
import { PRODUIT } from '../constantes/produits';



function ToutProduits (){

const Items=({produits})=>{

    return(
        <TouchableOpacity style={{ height:hp(25),width:hp(20), marginBottom:hp(1.5), alignItems:'center'}}>
            <View style={{alignItems:'center'}}>
                <Image source={{uri:produits.image}} style={{height:hp(20), width:wp(35),}} resizeMode='contain' />
                <Text style={{fontSize:hp(1.6), fontWeight:'600', marginTop:hp(2)}}>
                    {
                        produits.nom.length>15  ? produits.nom.slice(0,20)+'...': produits.nom
                    }
                </Text>
            </View>
        </TouchableOpacity>


    );
}



    return(
        <View style={{marginBottom:hp(5)}}>
            <FlatList
            columnWrapperStyle={{justifyContent:'space-between'}}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
            }}
            numColumns={2} 
            data={PRODUIT} 
            renderItem={({item})=> <Items produits={item} /> } 

            />
        </View>


    );
};

export default ToutProduits;