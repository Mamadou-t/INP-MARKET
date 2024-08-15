
import React from 'react';

import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import COLORS from '../../../constantes/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Retour from '../../../composants/retour';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import ProfileOptions from '../../../composants/ProfileOption';
import { useNavigation } from '@react-navigation/native';
function MonCompteScreen() {
    const navigation=useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }} >
            <View style={{ flexDirection: 'row', marginVertical: hp(3), marginHorizontal: hp(2), alignItems: 'center' }}>
                <Text style={{ fontSize: hp(3), fontWeight: '700' }} >Profile</Text>
            </View>

            <View style={{ padding: hp(5), backgroundColor: COLORS.grey, borderRadius: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 100, alignSelf: 'center' }}>
                <Ionicons name="person" size={50} color="black" />
            </View>

            <View style={{ marginTop: hp(5), flexDirection: 'column' }}>
                <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Mon_Profile',)} >
                    <ProfileOptions texte={"Profile"} IconName={'account-circle'} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Mes_Commandes')} >
                    <ProfileOptions texte={"Mes commandes"} IconName={'shopping-cart'} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Mes_Vendeurs')}>
                    <ProfileOptions texte={"Vendeurs suivis"} IconName={'check-circle-outline'} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Mes_Boutiques')}>
                    <ProfileOptions texte={"Mes boutiques"} IconName={'store'} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Mes_Services')}>
                    <ProfileOptions texte={"Mes services"} IconName={'build-circle'} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Connexion')}>
                    <View style={{ marginTop: hp(15) }}>
                        <ProfileOptions texte={"Déconnexion"} IconName={'highlight-remove'} />
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

};

export default MonCompteScreen;