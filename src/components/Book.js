import React from 'react';



function Book(props) {
  return  <div> 

  <h2>{props.book.volumeInfo.title}</h2>
  <p>{props.book.volumeInfo.authors[0]}</p>
 <img src={props.book.volumeInfo.imageLinks.thumbnail} />
 <p>{props.book.saleInfo.retailPrice?.amount}</p>




</div> }


export default Book;