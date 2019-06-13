import React from 'react'
import { StyleSheet, View, Button, TextInput, FlatList, Text } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from "./FilmItem"

class Search extends React.Component{
  render(){
    return(
      <View style={ styles.mainContainer }>
        <TextInput placeholder="Titre du film" style={styles.textInput }/>
        <Button style={{ height: 50 }} title="Rechercher" onPress={() => {}}/>
        <FlatList
          data={films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem/>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer:{
    marginTop: 25,
    flex: 1
  },
  textInput: {
    marginLeft: 5,
    marginRight:5,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Search
