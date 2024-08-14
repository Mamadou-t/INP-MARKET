
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View, Text, SafeAreaView, TouchableOpacity } from'react-native';
import COLORS from '../../../constantes/colors';
import Header from '../../../composants/header';
import { AntDesign } from '@expo/vector-icons';
import CategoryItems from '../../../composants/categoriesItems';


function CategoriesScreen ({navigation}){
    return(

        <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
            <View style={{marginHorizontal:hp(2), marginVertical:hp(3),flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:hp(3), fontWeight:'bold'}}>Catégories</Text>
                <Header />
            </View>

            <TouchableOpacity style={{padding:wp(2)}} onPress={()=>navigation.navigate('ToutProduits')}>
                <View style={{marginHorizontal:hp(2), marginVertical:hp(3), flexDirection:'row',justifyContent:'flex-end'}}>
                    <Text style={{fontSize:hp(2),fontWeight:'600'}}>Afficher tous les produits</Text>
                    <AntDesign name="right" size={22} color="black" />
                </View>
            </TouchableOpacity>

            <View>
                <CategoryItems />
            </View>

        </SafeAreaView>
    );

}

export default CategoriesScreen;