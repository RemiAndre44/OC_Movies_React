
import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class FilmItem extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Image style={styles.image} source={require('../assets/super-meat-boy.jpg')} />
        <View>
          <Text style={styles.title_text}>Titre du film</Text>
          <Text style={styles.vote}>Vote</Text>

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    margin: 5,
    height: 190,
    flex: 1,
    flexDirection: 'row'
  },
  title_text: {
    flex: 1,

  },
  image: {
    flex: 1
  },
  vote: {
    flex: 0.5
  }
})

export default FilmItem
