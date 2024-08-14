
import {React,useState} from 'react';

import { View, Text, SafeAreaView,TouchableOpacity } from'react-native';
import COLORS from '../../constantes/colors';
import Retour from '../../composants/retour';
import ToutProduits from '../../composants/ToutsProduitsDetails';
import SearchBar from '../../composants/searchBar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SearchBarProduit from '../../composants/searchBarProduit';
import ToutsProduitsDetails from '../../composants/ToutsProduitsDetails';
import { PRODUIT } from '../../constantes/produits';
import Header from '../../composants/header';
import Fontisto from '@expo/vector-icons/Fontisto';
import PanierIcon from '../../composants/PanierIcon';
import { CategoryData } from '../../constantes/categories';



function ToutsProduitsCategorie({route}){

    const { categorie } = route.params;

    return(
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
            <View>
                
                <View style={{justifyContent:'space-between',flexDirection:'row',marginRight:hp(2)}} >
                  <View style={{flexDirection:'row'}}>
                          <Retour />
                          <Text style={{fontSize:hp(3),fontWeight:'bold',marginTop:hp(2)}}>{categorie.label} </Text>
                  </View>

                  <View style={{flexDirection:'row',marginHorizontal:hp(2),marginTop:hp(2)}}>
                        <TouchableOpacity style={{paddingHorizontal:hp(2)}} onPress={()=>navigation.navigate('Rechercher_Produits')}>
                            <Fontisto name="search" size={25} color="black" />
                        </TouchableOpacity>
                        <PanierIcon />
                  </View>                  

                        
                </View>
                <View style={{marginTop:hp(4),marginHorizontal:hp(2)}}>
                    <ToutsProduitsDetails   />
                </View>
            </View>
        </SafeAreaView>
    );
};
export default ToutsProduitsCategorie;
