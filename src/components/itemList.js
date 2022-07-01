import React, {useState,useEffect} from "react";
import '../CSS/add.css'

function ListItems(props){
   const [products, setProducts] = useState(localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : []);
   const [card, setCard] = useState([]);
   const [Products] = useState(JSON.parse(localStorage.getItem('list')))
   const [bookmarked, setBookmarked] = useState([]);



   // console.log(list)
   // const data = localStorage.setItem('data', JSON.stringify(list))
   console.log('from storage', JSON.parse(localStorage.getItem('data')))
   

   // setProducts(JSON.parse(localStorage.getItem('data')))

  const addToCart = (products,index)=>{
      let bookmarkedItems = bookmarked;
      bookmarkedItems.push(products);
      setBookmarked(bookmarked);


      props.add(bookmarked);
      console.log(bookmarked);
      console.log(localStorage.getItem('bookmarked'))
  setCard([...card, products]);
  };
  console.log(products)
    return(
        <div>
            <header>
                <button>
                    Go to BookMark({card.length})
                    
                </button>
            </header>
            
            <h1>Products</h1>
            <div className="products">
               {products.map((Product,index)=>(
                
                <div className="product" key={index}>
                 <h3>{Product.name}</h3>
                 <h4>{Product.costs}</h4>
                 <img src={Product.Image} alt={Product.name}/><br></br>
                 <button onClick={()=> addToCart(Product,index)}>Add to BookMark</button>
             </div>
             
             
               ))}
            </div>
        </div>
    );
}


export default ListItems;