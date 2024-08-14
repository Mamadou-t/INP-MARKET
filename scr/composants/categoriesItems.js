import { React, useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, FlatList, Dimensions, Image, ScrollView, StatusBar, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CategoryData } from '../constantes/categories';
import COLORS from '../constantes/colors';
import { PRODUIT } from '../constantes/produits';
import Animated, { FadeInDown, useAnimatedStyle } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';




function CategoryItems() {
    const navigation = useNavigation();
       // const [imageUrl, setImageUrl] = useState(null);
       // const [loading, setLoading] = useState(true);
        //const [error, setError] = useState(false);
    
    
          const Items = ({ data }) => {
            return (
              <Animated.View entering={FadeInDown.delay(100).duration(500)}>
                <TouchableOpacity activeOpacity={0.8}  onPress={() => navigation.navigate('Touts_produits_categorie',data)} style={{ height: hp(15), width: 'auto', borderRadius: 15, marginBottom: hp(1.5), justifyContent: 'center', marginHorizontal: hp(2), alignItems: 'center' }}>
                  <ImageBackground source={{ uri: data.image }} style={{ justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', borderRadius: 20, overflow: 'hidden' }} onError={() => console.error('Error loading image')}>
                    <View style={{...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0, 0, 0, 0.3)', justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ fontSize: hp(3.5), fontWeight: '600', color: 'white' }}>{data.name}</Text>
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
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Items data={item} />}

            />
        </View>


    );
};

const style = StyleSheet.create({



});
export default CategoryItems;
