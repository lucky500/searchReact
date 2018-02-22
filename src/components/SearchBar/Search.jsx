import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

export default props => (
  <div className="search-input">
    <InputGroup>
      <Input placeholder='Enter Search' 
        onChange={props.handleChange}
      />
      <InputGroupAddon addonType="append"
        onClick={props.handleSearch}>
        <span className='input-group-text'>
          <i className="fa fa-search fa-lg fa-flip-horizontal"></i>
        </span>
      </InputGroupAddon>
    </InputGroup> 
  </div>
)


