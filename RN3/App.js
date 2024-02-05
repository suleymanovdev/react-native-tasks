import React from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity, Image, Alert, ImageBackground } from 'react-native';

const data = {
  hotDeals: [
    { id: '1', name: 'Item #1 Name', price: '$19.99', imageUrl: 'https://m.media-amazon.com/images/I/61UxfXTUyvL._AC_UF1000,1000_QL80_.jpg' },
    { id: '2', name: 'Item #2 Name', price: '$19.99', imageUrl: 'https://m.media-amazon.com/images/I/61UxfXTUyvL._AC_UF1000,1000_QL80_.jpg' },
    { id: '3', name: 'Item #3 Name', price: '$19.99', imageUrl: 'https://m.media-amazon.com/images/I/61UxfXTUyvL._AC_UF1000,1000_QL80_.jpg' },
  ],
  trending: [
    { id: '4', name: 'Item #4 Name', price: '$19.99', imageUrl: 'https://m.media-amazon.com/images/I/61UxfXTUyvL._AC_UF1000,1000_QL80_.jpg' },
    { id: '5', name: 'Item #5 Name', price: '$19.99', imageUrl: 'https://m.media-amazon.com/images/I/61UxfXTUyvL._AC_UF1000,1000_QL80_.jpg' },
    { id: '6', name: 'Item #6 Name', price: '$19.99', imageUrl: 'https://m.media-amazon.com/images/I/61UxfXTUyvL._AC_UF1000,1000_QL80_.jpg' },
  ],
};

const App = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => Alert.alert(item.name, `Price: ${item.price}`)}>
      <View style={styles.item}>
        <Image source={{ uri: item.imageUrl }} style={styles.placeholderImage} />
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground source={{ uri: 'https://i.pinimg.com/736x/65/9a/2b/659a2bc335f31700cacba5e1f2556b1f.jpg' }} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.headerButton}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Market</Text>
        <TouchableOpacity>
          <Text style={styles.headerButton}>Filter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchSection}>
        <TextInput placeholder="Search" style={styles.searchInput} />
      </View>
      <Text style={styles.sectionTitle}>Hot deals</Text>
      <FlatList
        horizontal
        data={data.hotDeals}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
      <Text style={styles.sectionTitle}>Trending</Text>
      <FlatList
        horizontal
        data={data.trending}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  headerButton: {
    fontSize: 16,
    color: '#52a969',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchSection: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
  list: {
    paddingLeft: 10,
  },
  item: {
    width: 150,
    marginHorizontal: 5,
  },
  placeholderImage: {
    backgroundColor: '#ddd',
    height: 100,
    width: '100%',
    borderRadius: 5,
  },
  itemName: {
    fontSize: 14,
    marginVertical: 5,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default App;
