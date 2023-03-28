import React, {useState} from "react";
import { search } from '../../../utils/search'

const genresList = ['all', 'Documentary', 'Comedy', 'Horror', 'crime']

const RenderGenreItem = () => {
  const [selectedGenreName, setSeletedGenreName] = useState(null);

  const handleSelected = (e) => {
    setSeletedGenreName(+e.target.dataset.index)
    search(e.target.innerText);
  }

  return (
    genresList.map((item, index) => {
      return (
        <li className="genreListItem" key={item}>
          <button 
            type="button"
            className={`genreListItem_Button ${index === selectedGenreName ? 'active' : ''}`}
            onClick={handleSelected}
            data-index={index}>
              {item}
          </button>
        </li>
      )
    })
  )
}

export default RenderGenreItem;