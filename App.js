import * as React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import  COLORS  from './scr/constantes/colors';
import { Entypo, Fontisto, Ionicons,Feather,SimpleLineIcons,Octicons,AntDesign } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LandingScreen from './scr/composants/LandingScreen';
import HomeScreen from './scr/screens/Utilisateurs/HomeScreen';
import ConnexionScreen from './scr/composants/Connexions/ConnexionScreen';
import InscriptionScreen from './scr/composants/Connexions/InscriptionScreen';
import CategoriesScreen from './scr/screens/Utilisateurs/Categories/CategoriesScreen';
import BoutiquesScreen from './scr/screens/Utilisateurs/Boutiques/BoutiquesScreen';
import MonCompteScreen from './scr/screens/Utilisateurs/Compte/MonCompteScreen';
import ToutsProduits from './scr/screens/Utilisateurs/ToutsProduits';
import ServicesScreen from './scr/screens/Utilisateurs/Services/ServicesScreen';
import DetailsProduitsScreen from './scr/screens/Utilisateurs/DetailsProduitsScreen';
import PanierScrenn from './scr/screens/Utilisateurs/PanierScrenn';
import RechercherProduit from './scr/composants/SearchScreen';
import ToutsProduitsCategorie from './scr/screens/Utilisateurs/ToutsProduitsCategorie';
import DetailsBoutique from './scr/screens/Utilisateurs/Boutiques/DetailsBoutique';
import MesCommandesScreen from './scr/screens/Utilisateurs/Compte/Commandes';
import MesServicesScreen from './scr/screens/Utilisateurs/Compte/Services';
import MonProfileScreen from './scr/screens/Utilisateurs/Compte/Profile';
import MesBoutiquesScreen from './scr/screens/Utilisateurs/Compte/Boutiques';
import MesVendeursScreen from './scr/screens/Utilisateurs/Compte/Vendeurs';






enableScreens();

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const screenOptions = { 
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'relative',
    paddingHorizontal:hp(1),
    backgroundColor: COLORS.white,
    height: hp(9),
  }
};



const AppNavigation = () => {
  return (

    <Tabs.Navigator screenOptions={screenOptions}>
      <Tabs.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <SimpleLineIcons name="home" size={24} color={focused ? COLORS.orange : COLORS.black} />
              <Text style={{ fontSize: 15, color: focused ? COLORS.orange : COLORS.black }}>Accueil</Text>
            </View>
          )
        }}
      />
      <Tabs.Screen 
        name="Categories" 
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <AntDesign name="bars" size={24} color={focused ? COLORS.orange : COLORS.black} />
                <Text style={{ fontSize: 15, color: focused ? COLORS.orange : COLORS.black }}>Categories</Text>
            </View>
          )
        }}
      />
      
      <Tabs.Screen 
        name="Boutiques" 
        component={BoutiquesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Feather name="shopping-bag" size={24} color={focused ? COLORS.orange : COLORS.black} />
              <Text style={{ fontSize: 15, color: focused ? COLORS.orange : COLORS.black }}>Boutiques</Text>
            </View>
          )
        }}
      />
      <Tabs.Screen 
        name="MonCompte" 
        component={MonCompteScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Octicons name="person" size={24} color={focused ? COLORS.orange : COLORS.black} />
              <Text style={{ fontSize: 15, color: focused ? COLORS.orange : COLORS.black }}>Mon Compte</Text>
            </View>
          )
        }}
      />
    </Tabs.Navigator>

  );
};

const App = () => {
  return (
    
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Home" component={AppNavigation} />
        <Stack.Screen name="Connexion" component={ConnexionScreen} />
        <Stack.Screen name="Inscription" component={InscriptionScreen} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Boutiques" component={BoutiquesScreen} />
        <Stack.Screen name="MonCompte" component={MonCompteScreen} />
        <Stack.Screen name="ToutProduits" component={ToutsProduits} />
        <Stack.Screen name="Services" component={ServicesScreen} />
        <Stack.Screen name="Details_produits" component={DetailsProduitsScreen} />
        <Stack.Screen name="Panier" component={PanierScrenn} />
        <Stack.Screen name="Rechercher_Produits" component={RechercherProduit} />
        <Stack.Screen name="Touts_produits_categorie" component={ToutsProduitsCategorie} />
        <Stack.Screen name="Details_Boutique" component={DetailsBoutique} />
        <Stack.Screen name="Mes_Commandes" component={MesCommandesScreen} />
        <Stack.Screen name="Mes_Services" component={MesServicesScreen} />
        <Stack.Screen name="Mes_Vendeurs" component={MesVendeursScreen} />
        <Stack.Screen name="Mon_Profile" component={MonProfileScreen} />
        <Stack.Screen name="Mes_Boutiques" component={MesBoutiquesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
