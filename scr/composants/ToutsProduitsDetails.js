import {React, useState} from 'react';
import {  View, Text, SafeAreaView,StyleSheet, TextInput, TouchableOpacity, FlatList, Dimensions, Image, ScrollView, StatusBar, Button } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {CategoryData} from '../constantes/categories';
import COLORS from '../constantes/colors';
import { PRODUIT } from '../constantes/produits';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native'; 




function ToutsProduitsDetails (){

    

    const navigation = useNavigation();
    const Items=({produits})=>{

    return(
        <TouchableOpacity style={{ height:hp(25),width:hp(21), marginBottom:hp(3) }} onPress={()=>navigation.navigate("Details_produits",produits)}>
            <View style={{alignItems:'center'}}>
                <Image source={{uri:produits.image}} style={{height:hp(15), width:wp(35),}} resizeMode='contain' />
            </View>
            <Text style={{fontSize:hp(1.6), fontWeight:'600', marginTop:hp(1)}}>
                    {
                        produits.nom.length>20  ? produits.nom.slice(0,20)+'...': produits.nom
                    }
                </Text>

            <View style={{flexDirection:'column',}} >
                <Text style={{fontSize:hp(2.2),fontWeight:'700',marginVertical:hp(0.1)}}>{produits.prix} FCFA </Text>
                <TouchableOpacity style={{ backgroundColor: COLORS.orange, padding:wp(1), height:'auto', width:'auto', alignItems:'center',justifyContent:'center', borderRadius:10,marginTop:hp(1)}} >
                    <FontAwesome6 name="cart-plus" size={24} color="white" />                
                </TouchableOpacity>
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
            paddingBottom:hp(18),
            }}
            numColumns={2} 
            data={PRODUIT} 
            renderItem={({item})=> <Items produits={item} /> } 

            />
        </View>


    );
};

export default ToutsProduitsDetails;