import React from "react";

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.initialValue = this.props.initialValue;
    this.onSearch = this.props.onSearch;
    this.state = {value: this.props.value || ''}
  }

  handleOnChange = (e) => {
    this.setState({ value: e.target.value})
  }

  handleOnSubmit = (e) => {
    this.onSearch(e.target.value)
  }

  handlePressEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.onSearch(e.target.value)
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
                  onChange={this.handleOnChange}
                  onFocus={this.handleOnSubmit}
                  onKeyDown={this.handlePressEnter}
                />
              </label>
              <button type='button' className="btn search_btn" onClick={this.handleOnSubmit}>Search</button>
            </form>
          </div>
        </div>
      </>
    )
  }
}

export default SearchForm;
