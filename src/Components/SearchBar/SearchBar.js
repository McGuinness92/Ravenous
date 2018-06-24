import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ' ',
      location: ' ',
      sortBy: 'best_match'
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);

this.sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};
}

getSortByClass(sortByOptions) {
  if (this.state.sortBy === sortByOptions) {
    return 'active';
  }
    return ' ';
  }

handleSortByChange(sortByOptions) {
  this.setState({sortBy: sortByOptions});
}

handleTermChange(event) {
  this.setState({term: event.target.value});
}

handleLocationChange(event) {
  this.setState({location: event.target.value});
}

handleSearch(event) {
  this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
  event.preventDefault();
}


  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOptions => {
      let sortByOptionValue = this.sortByOptions[sortByOptions];
      return (<li className={this.getSortByClass(sortByOptionValue)}
      key={sortByOptionValue}
      onClick={this.handleSortByChange}>
      {sortByOptions}
      </li>);
    });
  }


  render() {
    return (
    <div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
      {this.renderSortByOptions()}
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" onChange={this.handleTermChange} />
    <input placeholder="Where?" onChange={this.handleLocationChange} />
  </div>
  <div className="SearchBar-submit">
    <a onClick={this.handleSearch}>Lets Go</a>
  </div>
</div>
);
  }
}


export default SearchBar;
