import React from 'react'
import Book from './Book';
import { data } from './data';
const bookData = {
    author: "Chinua Achebe",
    country: "Nigeria",
    imageLink: "images/things-fall-apart.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    pages: 209,
    title: "Things Fall Apart",
    year: 1958,
}; 



const LibraryApp = () =>
{
    return (
        <div className="library-app">
            <div className="book-grid">
                {
                    data.map((item, index) => (
                        <Book key={index} bookdata={item} />

                   ))
                }
        </div>

        </div>
         
        
    )
};

export default LibraryApp;
