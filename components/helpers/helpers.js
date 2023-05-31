export const convertGenres = (genresArr) => {
  if (!genresArr) {
    return [];
  }
  if (genresArr.length <=1) {
    return genresArr;
  }
  return genresArr.slice(0, -1).join(", ") + ", " + genresArr[genresArr.length - 1]
}

export const convertDate = (release_date) => {
  if (!release_date) {
    return [];
  }
  return release_date.slice(0, -6);
}

export const convertDuration = (time) => {
  const hours = Math.floor(time/60);
  const min = time%60;
  return hours+'h ' + min+"min"; 
}
