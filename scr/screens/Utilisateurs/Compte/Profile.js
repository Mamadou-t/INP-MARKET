
import React from 'react';

import { SafeAreaView, Text, View } from 'react-native';
import Retour from '../../../composants/retour';
import COLORS from '../../../constantes/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


function MonProfileScreen() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }} >
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Retour />
                    <Text style={{ fontSize: hp(2.5), fontWeight: 'bold', marginTop: hp(2) }}>Mon profile</Text>
                </View>
                <View style={{}}>
                    <View style={{marginHorizontal: hp(2)}}>
                        <Text style={{fontSize:hp(2),color:COLORS.grey}}>Nom et prénom</Text>
                        <View style={{ backgroundColor: COLORS.light, justifyContent: 'center', height: hp(6), borderRadius: 15, borderWidth: 1, borderColor: COLORS.grey, marginVertical: hp(1) }}>
                            <Text style={{ fontSize: hp(2.2), paddingLeft: hp(2) }}>John Doe</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: COLORS.light, marginHorizontal: hp(2), justifyContent: 'center', height: hp(6), borderRadius: 15, borderWidth: 1, borderColor: COLORS.grey, marginVertical: hp(1) }}>
                        <Text style={{ fontSize: hp(2.2), paddingLeft: hp(2) }}>Nom : John Doe</Text>
                    </View>
                    <View style={{ backgroundColor: COLORS.light, marginHorizontal: hp(2), justifyContent: 'center', height: hp(6), borderRadius: 15, borderWidth: 1, borderColor: COLORS.grey, marginVertical: hp(1) }}>
                        <Text style={{ fontSize: hp(2.2), paddingLeft: hp(2) }}>Nom : John Doe</Text>
                    </View>
                    <View style={{ backgroundColor: COLORS.light, marginHorizontal: hp(2), justifyContent: 'center', height: hp(6), borderRadius: 15, borderWidth: 1, borderColor: COLORS.grey, marginVertical: hp(1) }}>
                        <Text style={{ fontSize: hp(2.2), paddingLeft: hp(2) }}>Nom : John Doe</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>

    );
};

export default MonProfileScreen;