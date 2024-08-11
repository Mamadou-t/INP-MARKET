import {React, useState} from 'react';
import {  View, Text, SafeAreaView,StyleSheet, TextInput, TouchableOpacity, FlatList, Dimensions, Image, ScrollView, StatusBar, ImageBackground } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {CategoryData} from '../constantes/categories';
import COLORS from '../constantes/colors';
import { PRODUIT } from '../constantes/produits';
import { BOUTIQUES } from '../constantes/Boutiques';
import { useNavigation } from '@react-navigation/native';



function BoutiqueItems (){
const navigation=useNavigation();
const Items=({boutiques})=>{

    return(
        <TouchableOpacity  activeOpacity={0.5} style={{marginVertical:hp(1)}} onPress={()=>navigation.navigate('Details_Boutique',boutiques)} >
                <ImageBackground source={{uri:boutiques.image}} style={styles.image} >
                <View style={styles.overlay}>
                        <Text style={{bottom:'40%',fontSize:hp(3),position:'absolute',color:COLORS.white,fontWeight:'bold'}}>{boutiques.nom}</Text>
                </View>
                </ImageBackground>


        </TouchableOpacity>


    );
}



    return(
        <View style={{marginBottom:hp(5)}}>
            <FlatList
            columnWrapperStyle={{justifyContent:'space-between'}}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                marginHorizontal:hp(2),
                paddingBottom:hp(17)
            }}
            numColumns={2} 
            data={BOUTIQUES} 
            renderItem={({item})=> <Items boutiques={item} /> } 

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

export default BoutiqueItems;