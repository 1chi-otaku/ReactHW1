import React from 'react'

function Book(props) {
   

    return (
        <div>
            <h3>{props.book.title}</h3>
            <p>Year: {props.book.year}</p>
            <p>Author: {props.book.author}</p>
            {props.book.bestseller && <p>Bestseller</p>}
       </div>
    )
}

export default Book
