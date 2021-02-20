import { request } from 'express';
import React, { Component } from 'react'
import Search from './Search'


class Books extends Component {
    constructor (props){
        super(props);
        this.state = {
            books: [],
            searchBox: ''

        }
    }


    searchBooks = () => {
        request.get("https://www.googleapis.com/books/v1/volumes?q=search+terms")
    }


    handleSearch = (e) => {
        
        this.setState({ searchBox: e.target.value })
    }
   


render () {
    return (
        <div>
            <Search handleSearch={this.handleSearch}/>
        </div>
    )
}
}
export default Books
