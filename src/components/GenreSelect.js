import React, {useState} from "react";

const genresList = ['all', 'Documentary', 'Comedy', 'Horror', 'crime']

const GenreSelect = (props) => {
  const [selectedGenre, setSeletedGenre] = useState('all')

  // const { nameList, selectedGenre, onSelect } = props;
  
  const renderGenderList = () => {
    return (
      <ul className="genreList">
        {renderGenderItem()}
      </ul>
    )
  }

  const handleSelected = (e) => {
    setSeletedGenre(+e.target.dataset.index)
  }
  
  const renderGenderItem = () => {
    return (
      genresList.map((item, index) => {
        return (
          <li className="genreListItem" key={index}>
            <button 
              type="button"
              className={`genreListItem_Button ${index === selectedGenre ? 'activeItem' : ''}`}
              onClick={handleSelected}
              data-index={index}
            >
                {item}
            </button>
          </li>
        )
      })
    )
  }

  return (
    <>
      <div className="genreSelect_container">
        <h1>GenreSelect component</h1>
        {renderGenderList()}
      </div>
    </>
  )
}

export default GenreSelect;
