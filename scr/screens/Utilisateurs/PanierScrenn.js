import { View,Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { PRODUIT } from "../../constantes/produits";
import COLORS from "../../constantes/colors";
import Retour from "../../composants/retour";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import PrixTotal from "../../fonctions/RechercheItem";



function PanierScrenn() {
    return(
        <SafeAreaView style={{backgroundColor:COLORS.white,flex:1}}>
            <View style={{flexDirection:'column'}}>
                <View style={{flexDirection:'row'}}>
                        <Retour />
                        <Text style={{fontSize:hp(3),fontWeight:'bold',marginTop:hp(1.6)}}>Panier</Text>
                </View>

                <View style={{backgroundColor:COLORS.light,flexDirection:'row',justifyContent:'space-between',paddingHorizontal:hp(2),paddingVertical:hp(1),alignItems:'center'}}>
                    <Text style={{fontSize:hp(2.3),fontWeight:'700'}}>Prix Total</Text>
                    <Text style={{fontSize:hp(2.3),fontWeight:'700'}}>{PrixTotal(PRODUIT)} FCFA</Text>
                    
                </View>

                <View style={{top:hp(78),marginHorizontal:hp(2)}}>
                    <TouchableOpacity style={{backgroundColor:COLORS.orange,padding:hp(2),alignItems:'center',borderRadius:50}} activeOpacity={0.8} >
                        <Text style={{fontSize:hp(2.3),fontWeight:'700',color:COLORS.white}}>Valider la commande</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
};

export default PanierScrenn;