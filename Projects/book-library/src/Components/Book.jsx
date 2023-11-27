import React from 'react'

const Book = (props) =>
{
    console.log(props);
  return (
      <div className='book-card'>
          
          <h2 className='title'>{ props.bookdata.title }</h2>
          <p className='author'>{props.bookdata.author}</p>
          <p>Country: {props.bookdata.country}</p>
          <p>Pages: {props.bookdata.pages}</p>
          <p>Year: {props.bookdata.pages}</p>
          <p>Year: {props.bookdata.year}</p>
          <p>Link: <a href={props.bookdata.link} target="_blank" >Click Here</a></p>
    </div>
  )
}

export default Book