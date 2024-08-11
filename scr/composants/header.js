import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {TouchableOpacity, View,Text} from'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import COLORS from '../constantes/colors';
import { useNavigation } from '@react-navigation/native';



const Header=()=>{
    const navigation=useNavigation();
    return(
        <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
            
            <TouchableOpacity style={{paddingRight:hp(1)}}>
                <View style={{}} >
                    <Ionicons name="notifications" size={30} color="black" /> 
                    <Text style={{fontSize:hp(1.5),color:COLORS.white, bottom:'70%',left:'40%',paddingHorizontal:hp(0.5),backgroundColor:COLORS.orange1,alignSelf:'center',borderRadius:100}}>10+</Text>          
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{paddingLeft:hp(2)}} onPress={()=>navigation.navigate('Panier')}>
                <View>
                    <Ionicons name="cart" size={30} color="black" />
                    <Text style={{fontSize:hp(1.7),color:COLORS.white, bottom:'70%',left:'40%',paddingHorizontal:hp(0.6),backgroundColor:COLORS.orange1,alignSelf:'center',borderRadius:100}}>15</Text>          

                </View>

            </TouchableOpacity>


        </View>
    )
};

export default Header;