import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import ProductList from '../components/Product/ProductList';


const URL  = 'https://search-app-backend.herokuapp.com/api/products';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
      searchedTerm: '',
      toggleOn: false, 
      list: [],
      gordonFilterResults: [],
      hideResultsBar: true,
      hideFilterResults: true,
    }  
  }


  handleChange = event => {
    this.setState({ 
      ...this.state, 
      searchedTerm: event.target.value,
    });
  }

  handleClientName = event => {
    this.setState({ 
      ...this.state,
      clientName: event.target.value,
    });
  }

  handleToggle = () => {
    this.setState({ 
      toggleOn: !this.state.toggleOn,
    });
  }


  fetchProducts = (searchedTerm = '', clientName) => {
    const search = searchedTerm ? `?&title__regex=/${searchedTerm}/&gordonToggle=${this.state.toggleOn}` : '';

    axios.get(`${URL}${search}`)
      .then(response => this.setState({
        ...this.state,  
        searchedTerm,
        clientName,
        list: response.data,
        gordonFilterResults: response.data.augmentedQuery
      }));
  }


  handleSearch = () => {
    this.fetchProducts(this.state.searchedTerm, this.state.clientName);
    if(this.state.hideResultsBar){
      this.setState({
        hideResultsBar: !this.state.hideResultsBar, 
      });
    }
    if(this.state.hideFilterResults){
      this.setState({
        hideFilterResults: !this.state.hideFilterResults
      });
    }
  }

  render(){
    {console.log(this.state.toggleOn)}
    const {
      toggleOn,
      list,
      gordonFilterResults,
      searchedTerm,
      clientName,
      hideResultsBar,
      hideFilterResults,
    } = this.state

    return(
      <div className="outer-wrapper">
        <Header />
        <main>
          <Container>
            <Row>
              <Col xs={12} md={12} lg={12} className="pl-0 pr-0">
                <SearchBar 
                  handleChange={this.handleChange}
                  handleToggle={this.handleToggle}
                  handleSearch={this.handleSearch}  
                  handleClientName={this.handleClientName}            
                  term={searchedTerm}
                  clientName={clientName}
                  toggleOn={toggleOn}       
                />
              </Col>
            </Row>
            <ProductList         
              list={list} 
              term={searchedTerm}
              hideResultsBar={hideResultsBar}  
              gordonFilterResults={gordonFilterResults} 
              toggleOn={toggleOn} 
            />  
          </Container>
        </main>
      </div>
    )
  }
}

App.proptypes = {
  searchedTerm: PropTypes.string.isRequired,
  toggleOn:   PropTypes.bool.isRequired,
  list: PropTypes.array,
  hideResultsBar: PropTypes.bool
}

export default App;

