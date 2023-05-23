import React, { useState } from "react";
import Button from "../Button/Button";
import { Form } from "react-router-dom";

const SearchForm = (props) => {
  const [inputValue, setInputValue] = useState();
  const { setSearchParams } = props;
  const checkLocalStorage = localStorage.getItem('search') ? localStorage.getItem('search') : 'What do you want to watch?';

  const handleSubmit = (e) => {
    e.preventDefault();
    let timer = setTimeout(() => {
      setSearchParams(`search=${inputValue}&searchBy=title`)
    }, 500);

    return () => {
      clearTimeout(timer)
    }
  }

  const handleChange = (e) => {
    setTimeout(() => {
      setInputValue(e.target.value)
      localStorage.setItem('search', e.target.value)
      setSearchParams(`&search=${e.target.value}&searchBy=title`)
    }, 500);
  }

  return (
    <div className="searchForm_container">
      <div className="form_container">
        <Form 
          className="form"  
          method="get"
          onSubmit={handleSubmit}
          onChange={handleChange}>
            <label className="form_title" htmlFor="search_input">Find your movie</label><br/>
            <input
              id="search_input"
              type= "text"
              name="search"
              defaultValue={localStorage.getItem('search')}
              placeholder={checkLocalStorage}
              className="search_input"
              data-testid="search_input"
            />
          <Button
            type={'submit'}
            btntext={'Search'}
          />
        </ Form>
      </div>
    </div>
  )
}

export default SearchForm;
