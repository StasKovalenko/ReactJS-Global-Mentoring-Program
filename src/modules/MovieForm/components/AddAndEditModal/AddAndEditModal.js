import React, { useRef, useState } from "react";
import Button from "../../../Button/Button";
import ErrorBoundary from "../../../ErrorBoundary/ErrorBoundary";
import GenresDropDown from "../GenresDropDown/GenresDropDown";

const AddAndEditModal = (props) => {
  const [ isGenresDropDownShowed, setIsGenresDropDownShowed] = useState(false)
  const [formState, setFormState] = useState(
    {
      title: "",
      releaseDate: "",
      email: "",
      rating: "",
      genres: [],
      runtime: "",
      overview: "",
    }
  )

  const { modalMovieType, movie } = props;

  const isAddMovieShowed = modalMovieType === "add" ? false : true;

  const handleFormClick = (e) => {
    if (!isAddMovieShowed) {
      e.target.value = "";
    }
  }

  const handleFormReset = () => {
    setFormState({
      title: "",
      releaseDate: "",
      email: "",
      rating: "",
      genres: [],
      runtime: "",
      overview: "",
    });
  }
  
  const newMovie = useRef(formState)

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(newMovie);
  }

  return (
    <ErrorBoundary>
      <div className="modalMovieWrap" >
      <form className="modalMovieContainer"
        data-testid="form" 
        onSubmit={handleFormSubmit}
        ref={newMovie}
        onClick={handleFormClick}
      >
        <div className="titleWrap">
          <label htmlFor="title">title</label>
          <input type="text" 
            id="title"
            defaultValue={!isAddMovieShowed ? "Enter movie name" : movie.title}
          />
        </div>
        <div className="dateWrap">
          <label htmlFor="releaseDate">releasedate</label>
          <input type="date" id="releaseDate" 
            defaultValue={!isAddMovieShowed ? "selectedDate" : movie.release_date}
          />
        </div>
        <div className="emailWrap">
          <label htmlFor="email">movie url</label>
          <input type="text" 
            id="email"
            defaultValue={!isAddMovieShowed ? "https://" : movie.poster_path}
          />
        </div>
        <div className="ratingeWrap">
          <label htmlFor="rating">rating</label>
          <input 
            type="number" 
            pattern="[0-9]*" 
            id="rating" 
            defaultValue={!isAddMovieShowed ? "7.1" : movie.vote_average}
          />
        </div>

        <div className="genresWrap">
          <label>genres</label>
          <GenresDropDown
            isGenresDropDownShowed={isGenresDropDownShowed}
            isAddMovieShowed = {isAddMovieShowed}
            genres={!isAddMovieShowed ? "" : movie.genres}
            onClick={() => {setIsGenresDropDownShowed(!isGenresDropDownShowed)}}
          />
          <span 
            className="genresWrapUnderLineText"
            style={{visibility: !isAddMovieShowed ? "visible" : "hidden"}}
          >
              Select at least one genre to proceed
          </span>
        </div>

        <div className="runtimeWrap">
          <label htmlFor="runtime">runtime</label>
          <input type="number" 
            id="runtime"
            placeholder={!isAddMovieShowed ? "minutes" : ""}
            defaultValue={!isAddMovieShowed ? "" : movie.runtime} />
        </div>
        <div className="textareaWrap">
        <label htmlFor="ovirview">overview</label>
        <textarea 
          id="ovirview"
          data-testid="ovirview"
          rows="7"
          defaultValue={!isAddMovieShowed ? "Movie description" : movie.overview}
        >
        </textarea>
      </div>
      
      <div className="btnContainer">
        <Button 
          btntext={"reset"}
          btnstyle={"reset"}
          data-testid="reset"
          type={'reset'}
          onClick={handleFormReset}
        />
        <Button 
          btntext={"submit"}
          type={'submit'}
          onClick={handleFormSubmit}
          data-testid="submit"
        />
      </div>
      </form>
      
    </div>

    </ErrorBoundary>
    
  )
}

export default AddAndEditModal;