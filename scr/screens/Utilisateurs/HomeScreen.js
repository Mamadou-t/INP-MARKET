import {React,useState,useEffect} from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import Header from '../../composants/header';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import COLORS from '../../constantes/colors';
import SearchBar from '../../composants/searchBar';
import Categories from '../../composants/categories';
import Produits from '../../composants/produits';
import { CategoryData } from '../../constantes/categories';



function HomeScreen() {

    const [activeCategory, setActiveCategory] = useState('Informatique');
    return(

        <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>   
            <View style={{marginHorizontal:hp(2), marginVertical:hp(3),flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:hp(3), fontWeight:'bold',color:COLORS.orange1}}>Accueil</Text>
                <Header />
            </View>
            <View>
                <SearchBar />
            </View>
            <View style={{  marginHorizontal:hp(2), marginTop:hp(3),}}>
                <Text style={{fontSize:hp(3), fontWeight:'bold'}} >Meilleurs Catégories</Text>

                <View style={{marginVertical:hp(1)}}>
                <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                <Produits />

                </View>

            </View>


        </SafeAreaView>
    )
};

export default HomeScreen;