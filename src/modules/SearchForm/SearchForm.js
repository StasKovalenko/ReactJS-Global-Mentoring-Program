import React from "react";
import { search } from '../../utils/search'
import Button from "../Button/Button";

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.initialValue = this.props.initialValue;
    this.onSearch = search;
    this.state = {value: this.props.value || ''}
  }

  handleOnChange = (e) => {
    this.setState({ value: e.target.value})
  }

  handleOnSubmit = (e) => {
    this.onSearch(e.target.value);
  }

  handleOnClick = () => {
    this.onSearch(this.state.value);
  }

  handlePressEnter = (e) => {
    if (e.key === 'Enter') {
      this.onSearch(e.target.value);
      e.preventDefault();
    }
  }

  render () {
    return (
      <>
        <div className="searchForm_container">
          <h1 className="searchForm_title">Find your movie</h1>
          <div className="form_container">
            <form className="form">
              <label>
                <input 
                  type= "text"
                  value={this.state.value}
                  placeholder={'What do you want to watch?'}
                  className="search_input"
                  data-testid="search_input"
                  onChange={this.handleOnChange}
                  onFocus={this.handleOnSubmit}
                  onKeyDown={this.handlePressEnter}
                />
              </label>
              <Button 
                type={'button'}
                className="btn"
                btnEvent={this.handleOnClick}
                btnText={'Search'}
              />
            </form>
          </div>
        </div>
      </>
    )
  }
}

export default SearchForm;
