import React, {useState} from "react";
import Button from "../../../Button/Button";
import { MultiSelect } from "react-multi-select-component";
import { useForm, Controller } from "react-hook-form";

const AddFormModal = (props) => {
  const { register, handleSubmit, formState:{errors}, control } = useForm();

  const { modalMovieType, setIsAddFormSubmitted } = props;
  
  const isAddMovieShowed = modalMovieType === "add" ? false : true;

  const handleFormsubmit = async ({ title, releaseDate, url, runtime, overview, rating }, data) => {
    console.log(data);
    const newMovie = {
      title: title,
      release_date: releaseDate,
      poster_path: url,
      runtime: +runtime,
      overview: overview,
      genres: selected.map((genre => genre.label)),
      vote_average: +rating,
    }

    try {
      const response = await fetch('http://localhost:4000/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie),
      });
  
      if (response.ok) {
        console.log('Данные успешно отправлены на сервер');
          setIsAddFormSubmitted(true);

      } else {
        console.error('Произошла ошибка при отправке данных на сервер');
      }
    }catch (error) {
      // console.error('Произошла ошибка при выполнении запроса', error);
    }
  }

  const options = [
    { value: "option1", label: "Crime" },
    { value: "option2", label: "Documentary" },
    { value: "option3", label: "Horror" },
    { value: "option4", label: "Comedy" }
  ];

  const [selected, setSelected] = useState([])

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
          placeholder={!isAddMovieShowed ? "Enter movie name" : null}
        />
        {errors.title && <p className="error">Title is required</p>}
      </div>
      <div className="dateWrap">
        <label htmlFor="releaseDate">releasedate</label>
        <input
          type="date"
          id="releaseDate"
          {...register("releaseDate", {required: true})}
          placeholder={!isAddMovieShowed ? "Selected Date" : null}
        />
        {errors.releaseDate && <p className="error">ReleaseDate is required</p>}
      </div>
      <div className="urlWrap">
        <label htmlFor="url">movie url</label>
        <input type="text" 
          id="email"
          {...register("url", {required: true, minLength: 6})}
          placeholder={!isAddMovieShowed ? "https://" : null}
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
          placeholder={!isAddMovieShowed ? "7.1" : null}
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
                  options={options}
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
            style={{visibility: !isAddMovieShowed ? "visible" : "hidden"}}
          >
              Select at least one genre to proceed
          </span>
        </div>

        <div className="runtimeWrap">
          <label htmlFor="runtime">runtime</label>
          <input type="number" 
            id="runtime"
            {...register("runtime", {required: true, maxLength: 3})}
            placeholder={!isAddMovieShowed ? "minutes" : ""} />
            {errors.runtime && <p className="error">Enter correct runtime</p>}
        </div>
        <div className="textareaWrap">
          <label htmlFor="ovirview">overview</label>
          <textarea 
            id="overview"
            data-testid="overview"
            {...register("overview", {required: true,minLength: 10 ,maxLength: 350})}
            rows="7"
            placeholder={!isAddMovieShowed ? "Movie description" : ""}
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

export default AddFormModal;
