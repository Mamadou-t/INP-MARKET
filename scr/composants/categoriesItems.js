import { React, useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, FlatList, Dimensions, Image, ScrollView, StatusBar, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CategoryData } from '../constantes/categories';
import COLORS from '../constantes/colors';
import { PRODUIT } from '../constantes/produits';
import Animated, { FadeInDown,useAnimatedStyle } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';




function CategoryItems() {
    const navigation = useNavigation();
    const Items = ({ categories }) => {



        return (

            
            <Animated.View entering={FadeInDown.delay(300).duration(500)} >

                <TouchableOpacity onPress={() => navigation.navigate('Touts_produits_categorie', categories)} style={{ height: hp(15), width: 'auto', borderRadius: 15, marginBottom: hp(1.5), justifyContent: 'center', marginHorizontal: hp(2), alignItems: 'center', }}>
                    <ImageBackground source={{ uri: categories.image }} style={{ justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%',borderRadius:20,overflow:'hidden' }}>
                        <View style={{
                            ...StyleSheet.absoluteFillObject,
                            backgroundColor: 'rgba(0, 0, 0, 0.2)', // Ajuste l'opacité selon tes besoins
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{ fontSize: hp(3), fontWeight: '600', color: 'white' }}>{categories.name} </Text>
                        </View>

                    </ImageBackground>

                </TouchableOpacity>
            </Animated.View>



        );
    }



    return (
        <View style={{ marginBottom: hp(23) }} >
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                }}
                numColumns={1}
                data={CategoryData}
                renderItem={({ item }) => <Items categories={item}  />}

            />
        </View>


    );
};

const style = StyleSheet.create({



});
export default CategoryItems;
