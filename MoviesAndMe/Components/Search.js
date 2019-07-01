// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

class Search extends React.Component {

  constructor(props){
    super(props)
    this.page = "0"
    this.totalPages = "0"
    this.searchedText = ""
    this.state = { films: [],
      isLoading: false//etat du loader
     }
  }

  _displayLoading(){
    if(this.state.isLoading){
      return(
        <View style={styles.loading_container}>
          <ActivityIndicator size='large'/>//component pour un loader
        </View>
      )
    }
  }

  //lors d'une nouvelle recherche on set tout à vide
  _searchFilms(){
    this.page = "0"
    this.totalPages = "0"
    this.setState({films: []})
    this._loadFilms()
  }

  _loadFilms(){
    if(this.searchedText.length > 0){
      this.setState({isLoading: true})
      getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => {
        this.page = data.page
        this.totalPages = data.total_pages
        this.setState({
          films: [...this.state.films, ...data.results ],//cs6 incrémentation de data.results au state
          isLoading: false
        })
      })
    }
  }

  _searchTextInputChanged(text){
    this.searchedText = text
  }

  render() {
    return (
      <View style={styles.main_container}>
        <TextInput onSubmitEditing={() => this._searchFilms()} onChangeText={(text) => this._searchTextInputChanged(text)} style={styles.textinput} placeholder='Titre du film'/>
        <Button style={styles.searchBtn} title='Rechercher' onPress={() => this._searchFilms()}/>
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          onEndReachThreashold={0.5}//par exemple si on a 20 films par page venant de l'api alors il en prends que la moitié
          onEndReached={() => {//tant qu'on a pas attend le nb de page total on load film
            if(this.page < this.totalPages){
              this._loadFilms()
            }
          }}
          renderItem={({item}) => <FilmItem film={item}/>}
        />
        {this._displayLoading()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Search
