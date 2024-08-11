import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SearchBarProduit from './searchBarProduit';
import COLORS from '../constantes/colors';
import Retour from './retour';
import { PRODUIT } from '../constantes/produits';
import { SERVICES } from '../constantes/Services';
import { BOUTIQUES } from '../constantes/Boutiques';

const RechercherProduit = ({navigation,route}) => {
  const data= route.params;
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (text) => {
    setSearchText(text);

    if (text) {
      const newData = data.filter(item => {
        const itemData = (item.nom || item.libelle).toLowerCase();
        const textData = text.toLowerCase();

        // Check if the product name starts with the entered text
        const startsWith = itemData.startsWith(textData);

        // Check if the product name contains the entered text
        const includesText = itemData.includes(textData);

        // Return true if either condition is met
        return startsWith || includesText;      });

      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View>
        <View style={{flexDirection:'row'}}>
          <Retour />
          <SearchBarProduit value={searchText} onChange={handleSearch} />
        </View>

          { searchText.length > 0 && (
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            data={filteredData}
            renderItem={({ item }) => (
              <TouchableOpacity activeOpacity={0.6} style={{  }}>
                <View style={{
                  backgroundColor: '#f9f9f9',
                  padding: 20,
                  marginVertical: 1,
                  marginHorizontal: 16,
                  borderRadius: 12
                }}>
                  <Text>{item.nom || item.libelle}</Text>
                  
                  
                  {data==SERVICES ? <Text>{item.proprietaire}</Text> : null}
                  
               
                  
                </View>
              </TouchableOpacity>
            )}
          />
          )}
        </View>
    </SafeAreaView>
  );
};

export default RechercherProduit;
