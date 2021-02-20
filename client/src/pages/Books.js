import React, { useState, useEffect } from 'react';
import API from "../utils/API";

function Books() {
    const [books, setbooks] =useState([])
    const [formObject, setFormObject] =useState({})

    useEffect(() => { 
       loadbooks()
    }, [])

    function loadbooks() {
        API.getBooks()
        .then(res =>
            setbooks(res.data)
            ).catch(err => console.log(err))
    };

    function deleteBook(id) {
        API.deleteBook(id)
        .then(res => loadbooks())
        .catch(err => console.log(err));
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };

    return (
        <div>
            
        </div>
    )
}

export default Books
