import { createStackNavigator, createAppContainer } from 'react-navigation'
import Search from '../Component/Search'

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: "Rechercher"
    }
  }
})

export default createAppContainer(SearchStackNavigator)
