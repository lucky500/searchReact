import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class Filter extends Component {
  constructor(props){
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle(){
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render(){
    return(
      <div className="filter">
        <Dropdown
          isOpen={this.state.dropdownOpen} 
          toggle={this.toggle}
        >
          <DropdownToggle color="link" caret>
            Filter
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <span>Clear All</span>
        <span>x Chosen Filter</span>
        <span>x Chosen Filter</span>
      </div>
    );
  }
}


export default Filter;