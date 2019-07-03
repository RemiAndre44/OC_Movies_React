const initialState = { favoritesFilm: []}


function toggleFavorite(state = initialState, action){
  let nestState
  switch(action.type){
    case 'TOGGLE_FAVORITE' :
      const favoritesFilmIndex = state.favoritesFilm.findIndex(index => item.id === action.value.id)
      if(favoritesFilmIndex !== -1){
        //suppression
        nextState = {
          ...state,
          favoritesFilm: state.favoritesFilm.filter((item, index) =>index !== favoritesFilmIndex)
        }
      }else{
        //ajouter
        nextState = {
          ...state,
          favoritesFilm: [ ...state.favoritesFilm, action.value]
        }
      }
      return nextState || state
    default:
      return state

  }
}

export default toggleFavorite
