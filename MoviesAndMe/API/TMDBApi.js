const API_TOKEN = "f7f6413a069ad2df94bdfff551cc1eb9"

export function getFilmsFromApiWithSearchedText(text, page){
  const url = 'http://api.themoviedb.org/3/search/movie?api_key='+API_TOKEN+'&language=fr&query='+text+"&page="+page
  return fetch(url)
  .then((response) => response.json())
  .catch((error) => console.log(error))
}

export function getImageFromApi (name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}
