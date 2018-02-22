import React from 'react';
import { Row } from 'reactstrap';

import Product from './Product';
import SearchResultBar from '../SearchBar/SearchResultBar';


export default props => {
  const { toggleOn, hideResultsBar, hideFilterResults, term, list, gordonFilterResults } = props;
  return(
    <div>
      {
        hideResultsBar ? null : 
            <SearchResultBar 
              term={term} 
              gordonFilterResults={gordonFilterResults}
              hideFilterResults={hideFilterResults}
              toggleOn={toggleOn}
            />
      }
      <Row className="mt-3">
        {
          list.map(item => {
            return <Product {...item} key={item.id} />
          })
        }
      </Row>
    </div>
  );
}
