import {React, useState,useEffect} from 'react';
import {  View, Text, SafeAreaView,StyleSheet, TextInput, TouchableOpacity, FlatList, Dimensions, Image, ScrollView, StatusBar } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {CategoryData} from '../constantes/categories';
import COLORS from '../constantes/colors';
import Animated, { FadeInUp } from 'react-native-reanimated';


function Categories ({activeCategory,setActiveCategory}){

  



    return(

        <Animated.View entering={FadeInUp.duration(500)}>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{}}

            >
                {
                    
                    CategoryData.map((cat, index) => (
                        
                        <TouchableOpacity key={index} style={{marginHorizontal:hp(1),justifyContent:'center',alignItems:'center'}} 
                        onPress={()=>setActiveCategory(index)}
                        >
                            <View style={  [style.category, activeCategory==index && style.categorySelected]}>
                                <Image source={{uri: cat.image}} style={{width: hp(7), height: hp(7), borderRadius:200 }} />
                            </View>         
                            <Text style={{fontSize:18, fontWeight:'bold'}}>{cat.name}</Text>

                        </TouchableOpacity>
                    ))
                }

            </ScrollView>
        </Animated.View>
    );
};

const style=StyleSheet.create({

    category:{
        borderRadius:200,
        alignItems:'center',
        backgroundColor:COLORS.light,
        height:hp(8),
        width:hp(8),
        justifyContent:'center',
        alignItems:'center',


        

    },
    categorySelected:{
        backgroundColor:COLORS.orange1,
        height:hp(8),
        width:hp(8),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:400,

        
        


    }

});
export default Categories;