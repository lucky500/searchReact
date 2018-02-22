import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

class SearchResultBar extends Component {
  render(){
    //{console.log('aug:', this.props.gordonFilterResults.augmentations)}
    const { term, hideFilterResults, toggleOn, gordonFilterResults } = this.props

    return(
      <div className="search-result-bar py-3 px-3">
        <h1>Searched for {term}</h1>
        {
          toggleOn && gordonFilterResults != null ?
          <Row className="augmentation-area">
            <Col xs={12} md={6}>
              <div className="filter-results">
                <i className="fa fa-plus"></i>
                <span>Add:</span>
                <span>Royale with cheese?</span>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="filter-results">
                <i className="fa fa-random"></i>
                <span>Replace:</span>
                <span>What do they call a Whopper?</span>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="filter-results">
                <i className="fa fa-rocket"></i>
                <span>Boost:</span>
                <span>I don't know...</span>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="filter-results">
                <i className="fa fa-filter"></i>
                <span>Filter:</span>
                <span>...I didn't go to Burger King</span>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="filter-results">
                <i className="fa fa-search-plus"></i>
                <span>Augmentations:</span>
                <span>{gordonFilterResults.augmentedQuery}</span>
              </div>
            </Col>
          </Row> : null
        }
      </div>
    )
  }
}

export default SearchResultBar;