import React from "react";
import Button from "../Button/Button";

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.initialValue = this.props.initialValue;
    this.setSearchQuery = this.props.setSearchQuery;
    this.state = {value: this.props.value || ''}
  }

  handleOnChange = (e) => {
    this.setState({ value: e.target.value})
    this.setSearchQuery(e.target.value);
  }

  handleOnSubmit = (e) => {
    this.setSearchQuery(e.target.value);
  }

  handleOnClick = () => {
    this.setSearchQuery(this.state.value);
  }

  handlePressEnter = (e) => {
    if (e.key === 'Enter') {
      this.setSearchQuery(e.target.value);
      e.preventDefault();
    }
  }

  render () {
    return (
      <div className="searchForm_container">
        <div className="form_container">
          <form className="form">
            <label className="form_title" htmlFor="search_input">Find your movie</label><br/>
            <input
              id="search_input"
              type= "text"
              value={this.state.value}
              placeholder={'What do you want to watch?'}
              className="search_input"
              data-testid="search_input"
              onChange={this.handleOnChange}
              onFocus={this.handleOnSubmit}
              onKeyDown={this.handlePressEnter}
            />
            <Button 
              type={'button'}
              onClick={this.handleOnClick}
              btntext={'Search'}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default SearchForm;
