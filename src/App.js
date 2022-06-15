import logo from './logo.svg';
import './App.css';
import ListItems from './components/itemList';
import DisplayItems from './components/displayItems';
import React, {useState} from 'react';

function App() {
  // const [listItems] = useState( localStorage.getItem('bookmarked')? JSON.parse(localStorage.getItem('bookmarked')): [])
  const isEven = 1+1===3 ? true:false

  console.log(isEven)

  const [bookmarked,setBookmarked] = useState(localStorage.getItem('bookmarked')? JSON.parse(localStorage.getItem('bookmarked')): []);

  const addBookMarked= (bookmarked)=>{
    setBookmarked(bookmarked);
    console.log(bookmarked)
    // setBookmarked((item)=> [...item,])
         
  }
  return (
    <div className="container">
      
     <ListItems add={addBookMarked}/>
     <DisplayItems list={bookmarked}/> 
    </div>
  );
}

export default App;
