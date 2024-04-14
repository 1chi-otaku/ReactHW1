import React from 'react'
import Book from './Book';

function BookList() {

    const books = [
        { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, bestseller: true },
        { id: 2, title: '1984', author: 'George Orwell', year: 1949, bestseller: true },
        { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, bestseller: false },
        { id: 4, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951, bestseller: true },
        { id: 5, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', year: 1954, bestseller: true },
        { id: 6, title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813, bestseller: false },
        { id: 7, title: 'To the Lighthouse', author: 'Virginia Woolf', year: 1927, bestseller: false },
        { id: 8, title: 'Frankenstein', author: 'Mary Shelley', year: 1818, bestseller: false },
        { id: 9, title: 'Brave New World', author: 'Aldous Huxley', year: 1932, bestseller: false },
        { id: 10, title: 'Moby-Dick', author: 'Herman Melville', year: 1851, bestseller: false }
    ];
    let BooksElement = books.map( item => <Book book={item} key= {item.id} />)



    return (
        <>
        <div className='row'>{BooksElement}</div>
        </>
        
    )
}

export default BookList
