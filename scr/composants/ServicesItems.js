import {React, useState} from 'react';
import {  View, Text, SafeAreaView,StyleSheet, TextInput, TouchableOpacity, FlatList, Dimensions, Image, ScrollView, StatusBar, ImageBackground } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {CategoryData} from '../constantes/categories';
import COLORS from '../constantes/colors';
import { PRODUIT } from '../constantes/produits';
import { BOUTIQUES } from '../constantes/Boutiques';
import { SERVICES } from '../constantes/Services';



function ServiceItems (){

const Items=({services})=>{

    return(
        <TouchableOpacity  activeOpacity={0.5} style={{backgroundColor:COLORS.belg,flexDirection:'row',borderTopColor:COLORS.light ,borderTopWidth:1,borderBottomColor:COLORS.light,borderBottomWidth:0.5}}>
            <View style={{margin:hp(1)}}>
                <Image source={{uri:services.image}} style={{height:hp(10),width:hp(10),borderRadius:50}} />
            </View>
            <View  style={{flexDirection:'column',justifyContent:'space-around'}}>
                <Text style={{fontSize:hp(2.9),fontWeight:'700',marginTop:hp(0.7)}}>{services.libelle}</Text>
                <Text style={{color:COLORS.orange1,fontSize:hp(2)}}>{services.proprietaire}</Text>
                <Text>{services.disponibilite}</Text>
            </View>
        </TouchableOpacity>


    );
}



    return(
        <View style={{marginVertical:hp(5),paddingTop:hp(1)}}>
            <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
               // marginHorizontal:hp(2),
                paddingBottom:hp(10)
            }}
            numColumns={1} 
            data={SERVICES} 
            renderItem={({item})=> <Items services={item} /> } 

            />
        </View>


    );
};


const styles = StyleSheet.create({
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.3)', // Ajuste l'opacité selon tes besoins
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    image: {
        width: hp(21),
        height: hp(23),  // Adjust the height as needed
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20, // Border radius for rounded corners
        overflow: 'hidden', // Ensure the image respects the border radius
      },
  });

export default ServiceItems;