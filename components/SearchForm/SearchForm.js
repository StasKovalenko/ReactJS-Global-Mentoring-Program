import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { useRouter } from "next/router";
import styles from "./SearchForm.module.css";

const SearchForm = ({ setSearchParams }) => {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/?search=${inputValue}&searchBy=title`);
  };

  useEffect(() => {
    const handleRouteChange = (url) => {
      setSearchParams(`search=${inputValue}&searchBy=title`);
    };

    // Запустить обработчик событий при изменении маршрута
    router.events.on("routeChangeComplete", handleRouteChange);

    // Очистите обработчик событий при размонтировании
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [inputValue, router.events, setSearchParams]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.searchForm_container}>
      <div className={styles.form_container}>
        <form 
          className={styles.form}  
          method="get"
          onSubmit={handleSubmit}
          onChange={handleChange}>
            <label className={styles.form_title} htmlFor="search_input">Find your movie</label><br/>
            <input
              id="search_input"
              type= "text"
              name="search"
              defaultValue=""
              placeholder={"What do you want to watch?"}
              className={styles.search_input}
              data-testid="search_input"
            />
          <Button
            type={'submit'}
            btntext={'Search'}
          />
        </ form>
      </div>
    </div>
  )
}

export default SearchForm;
