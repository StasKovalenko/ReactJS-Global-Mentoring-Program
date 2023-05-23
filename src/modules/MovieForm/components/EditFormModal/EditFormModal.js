import React, {useState} from "react";
import Button from "../../../Button/Button";
import { MultiSelect } from "react-multi-select-component";
import { useForm, Controller } from "react-hook-form";

const EditFormModal = (props) => {
  const { register, handleSubmit, formState:{errors}, control } = useForm();

  const { modalMovieType, movie, setIsOpenEditDialog } = props;
  
  const isEditMovieShowed = modalMovieType === "Edit" ? false : true;

  const handleFormsubmit = async ({ title, releaseDate, url, runtime, overview, rating }) => {
    const editedMovie = {
      title: title,
      id: movie.id,
      release_date: releaseDate,
      poster_path: url,
      runtime: +runtime,
      overview: overview,
      genres: selected.map((genre => genre.label)),
      vote_average: +rating,
    }
    console.log(editedMovie);
      try {
        const response = await fetch('http://localhost:4000/movies', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editedMovie),
        });
        if (response.ok) {
          console.log('Данные успешно отправлены на сервер');
          setIsOpenEditDialog(false)
        } else {
          console.error('Произошла ошибка при отправке данных на сервер');
        }
      }catch (error) {
        // console.error('Произошла ошибка при выполнении запроса', error);
      }
  }

  function customOptions () {
    if(!movie.genres) {
      return null
    }
    return movie.genres.map((genre) => {
      return {
        value: genre, 
        label: genre,
      }
    })
  } 
  const checkOptions = customOptions();

  const [selected, setSelected] = useState(checkOptions)

  return (
    <div className="modalMovieWrap" >
    <form className="modalMovieContainer"
      data-testid="form" 
      onSubmit={handleSubmit(handleFormsubmit)}
    >
      <div className="titleWrap">
        <label htmlFor="title">title</label>
        <input type="text" 
          id="title"
          {...register("title", {required: true, minLength: 2})}
          placeholder={!isEditMovieShowed ? "Enter movie name" : null}
          defaultValue={movie.title}
        />
        {errors.title && <p className="error">Title is required</p>}
      </div>
      <div className="dateWrap">
        <label htmlFor="releaseDate">releasedate</label>
        <input
          type="date"
          id="releaseDate"
          {...register("releaseDate", {required: true})}
          placeholder={!isEditMovieShowed ? "Selected Date" : null}
          defaultValue={movie.release_date}
        />
        {errors.releaseDate && <p className="error">ReleaseDate is required</p>}
      </div>
      <div className="urlWrap">
        <label htmlFor="url">movie url</label>
        <input type="text" 
          id="email"
          {...register("url", {required: true, minLength: 6})}
          placeholder={!isEditMovieShowed ? "https://" : null}
          defaultValue={movie.poster_path}
        />
        {errors.url && <p className="error">URL is required</p>}
      </div>
      <div className="ratingeWrap">
        <label htmlFor="rating">rating</label>
        <input 
          type="number" 
          pattern="[0-9]*"
          step='any'
          {...register("rating", {required: true, minLength: 1, maxLength: 10})}
          id="rating" 
          placeholder={!isEditMovieShowed ? "7.1" : null}
          defaultValue={ movie.vote_average}
        />
        {errors.rating && <p className="error">Enter correct Reating</p>}
      </div>

        <div className="genresWrap">
          <label>genres</label>
          <div className="genresDropDown">
            <Controller
              control={control}
              name='genres'
              render={() => (
                <MultiSelect
                  onChange={setSelected}
                  value={selected}
                  options={checkOptions}
                  disableSearch={true}
                  hasSelectAll={false}
                />
              )}
            >
            </Controller>
            {errors.genres && <p className="error">Enter correct Reating</p>}
          </div>
          <span 
            className="genresWrapUnderLineText"
            style={{visibility: !isEditMovieShowed ? "visible" : "hidden"}}
          >
              Select at least one genre to proceed
          </span>
        </div>

        <div className="runtimeWrap">
          <label htmlFor="runtime">runtime</label>
          <input type="number" 
            id="runtime"
            {...register("runtime", {required: true, maxLength: 3})}
            placeholder={!isEditMovieShowed ? "minutes" : ""}
            defaultValue={ movie.runtime} />
            {errors.runtime && <p className="error">Enter correct runtime</p>}
        </div>
        <div className="textareaWrap">
          <label htmlFor="ovirview">overview</label>
          <textarea 
            id="overview"
            data-testid="overview"
            {...register("overview", {required: true,minLength: 10 ,maxLength: 550})}
            rows="7"
            placeholder={!isEditMovieShowed ? "Movie description" : ""}
            defaultValue={movie.overview}
          >
          </textarea>
          {errors.overview && <p className="error">Enter overview</p>}
        </div>
      
        <div className="btnContainer">
          <Button 
            btntext={"reset"}
            btnstyle={"reset"}
            data-testid="reset"
            type={'reset'}
          />
          <Button 
            btntext={"submit"}
            type={'submit'}
            data-testid="submit"
          />
        </div>
      </form>
    </div>
  )
}

export default EditFormModal;
