import data from '../data/movies.json';

export const filter = (option) => {
  let filterResult = [];
  data.filter((item) => {
    if (item === option) {
      return filterResult.push(item);
    }
    return filterResult;
  })
}
