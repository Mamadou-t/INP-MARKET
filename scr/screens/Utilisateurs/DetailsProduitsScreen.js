import { View,Text, SafeAreaView, Image } from "react-native";
import { PRODUIT } from "../../constantes/produits";
import COLORS from "../../constantes/colors";
import Retour from "../../composants/retour";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


function DetailsProduitsScreen({navigation,route}) {
    const produit = route.params;
    return(

        <SafeAreaView style={{backgroundColor:COLORS.white,flex:1}}>
            <View style={{flexDirection:'column'}}>
                <View style={{flexDirection:'row'}}>
                    <Retour />
                    <Text style={{fontSize:hp(3),fontWeight:'bold',marginTop:hp(1.6)}}>Details</Text>
                </View>

                <View style={{flexDirection:'column',marginHorizontal:hp(2),marginTop:hp(1)}}>
                    <View style={{height:hp(35),borderRadius:15,}}>
                        <Image source={{uri:produit.image}} style={{height:hp(35), resizeMode:'stretch'}}  />
                    </View>
                </View>

                <View style={{marginHorizontal:hp(2),backgroundColor:COLORS.light,height:hp(50),marginVertical:hp(3),borderRadius:20}}>
                    <View style={{flexDirection:'column',justifyContent:'space-between',marginLeft:hp(2),marginTop:hp(2)}}>
                        <Text style={{fontSize:hp(2.3),fontWeight:'700'}}>{produit.nom}</Text>
                        <Text style={{marginTop:hp(1),fontSize:hp(2.1)}}>Boutique : <Text style={{color:COLORS.orange1,fontWeight:'700'}}>LE CHEF</Text> </Text>
                        <Text style={{marginTop:hp(1),fontSize:hp(2.1)}}>{produit.stock} articles restants</Text>
                    </View>

                    <View style={{justifyContent:'flex-end',flexDirection:'row',marginTop:hp(1)}} >
                        <View style={{backgroundColor:COLORS.orange, padding:hp(2),borderTopLeftRadius:50,borderBottomLeftRadius:50}}>
                            <Text style={{fontSize:hp(2),fontWeight:'700'}}>{produit.prix} FCFA</Text>
                        </View>
                    </View>

                    <View style={{marginHorizontal:hp(2)}}>
                        <Text style={{fontSize:hp(2.2),fontWeight:'700'}}>Description</Text>
                        <Text style={{fontSize:hp(1.8),color:'gray',}}>
                            {
                                produit.description.length > 120 ? produit.description.slice(0,130)+'...' :produit.description
                            }
                        </Text>

                    </View>
                </View>

                
            </View>
        </SafeAreaView>
    );
};

export default DetailsProduitsScreen;