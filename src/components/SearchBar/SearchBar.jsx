import React from 'react';
import Search from './Search';
import GordonToggle from './GordonToggle';

export default props => (
  <section className="my-3">
    <div className="search-bar px-3">
      <Search
        handleChange={props.handleChange}
        handleSearch={props.handleSearch}
        handleClientName={props.handleClientName}
        clientName={props.ClientName} />
      <GordonToggle 
        handleToggle={props.handleToggle}
        toggleOn={props.toggleOn} />
    </div>
  </section>
)