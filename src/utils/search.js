import data from '../data/movies.json'

export const search = (option) => {
  let searchResult = [];
  data.filter((item) => {
    if (option.toLowerCase() === 'all') {
      return searchResult.push(item);
    }
    item.genres.forEach(el => {
      if(el.toLowerCase()===option.toLowerCase()){
        return searchResult.push(item);
      }
    });
  })

  return searchResult;
}
