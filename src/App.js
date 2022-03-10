import React, { useState } from 'react';
import Book from './components/Book';
import bookList from './models/books.json';


function App() {
  const [books, setBooks,] = useState(bookList);

   
   return <div>
   {books.map((item)=>{ 
     

     return <Book book = {item} />
    })} 
     
     
</div>



}

export default App;

