import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image, Dimensions } from 'react-native'
import { getFilmDetailFromApi } from '../API/TMDBApi'
import { getImageFromApi } from '../API/TMDBApi'

class FilmDetail extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      film: undefined,
      isLoading: true
    }
  }

  componentDidMount(){
    getFilmDetailFromApi(this.props.navigation.state.params.idFilm).then(data => {
      this.setState({
        film: data,
        isLoading: false
      })
    })
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  _displayFilm(){
    const film = this.state.film
    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 9 / 16);
    const imageWidth = dimensions.width;
    if(film != undefined){
      return (
        <ScrollView style={styles.scrollview_container}>
          <View style={styles.main_container}>
            <Image style={styles.image, {height: imageHeight, width: imageWidth}} source={{uri: getImageFromApi(film.backdrop_path)}}/>
            <Text style={styles.title}>{film.title}</Text>
            <Text style={styles.content}>{film.overview}</Text>
            <View style={styles.details}>
              <Text>Sorti le {film.release_date}.format('l')</Text>
              <Text>Note : {film.vote_average}</Text>
              <Text>Nombre de votes : {film.vote_count}</Text>
              <Text>Budget : {film.budget}</Text>
              <Text>Genre(s) :
              </Text>
              <Text>Companie(s) : </Text>
            </View>
          </View>
        </ScrollView>
      )
    }
  }

  render(){
    const idFilm = this.props.navigation.state.params.idFilm
    return (
      <View style={styles.main_container}>
        {this._displayFilm()}
        {this._displayLoading()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container : {
    flex: 1,
    flexDirection: "column"
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollview_container: {
    flex: 1
  },
  title: {
    marginTop: 5,
    marginBottom: 5,
    flex: 1,
    fontSize: 30,
    textAlign: "center",
    fontWeight: 'bold',
  },
  content : {
    flex: 3,
    marginTop: 5,
    marginBottom: 5,
    fontStyle: 'italic',
    color: '#666666',
  },
  details: {
    flex: 2,
    fontWeight: "bold",
  }
})

export default FilmDetail
