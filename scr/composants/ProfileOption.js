import { React } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


function ProfileOptions({ texte, IconName }) {
    return (
        <View>
                <View style={{ flexDirection: 'row', marginHorizontal: hp(2), marginVertical: hp(1.5), justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <MaterialIcons name={IconName} size={30} color="black" />
                        <Text style={{ fontSize: hp(2.3), marginLeft: hp(2) }}>{texte}</Text>
                    </View>
                    <MaterialIcons name="navigate-next" size={28} color="black" />

                </View>
        </View>

    );
};

export default ProfileOptions;