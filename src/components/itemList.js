import React, {useState,useEffect} from "react";
import '../CSS/add.css'

function ListItems(props){
    const [card, setCard] = useState([]);
    const list = [
        {
           id: 1,
           name: 'Blanket',
           costs: 'R599.99',
           Image: 'https://th.bing.com/th/id/R.91d17990f04030cd908b29eaa09db423?rik=VStptrGztHZN9g&pid=ImgRaw&r=0',
           bookmarked: true
        },
        {
            id: 2,
            name: 'Shirt',
            costs: 'R99.00',
            Image: 'https://th.bing.com/th/id/R.16c7ab43392b9e30bc00606e3c8cb405?rik=5Mi1Ty5GwOAUfA&pid=ImgRaw&r=0',
            bookmarked: true
        },
        {
           id: 3,
           name: 'Shorts',
           costs: 'R59.00',
           Image: 'https://th.bing.com/th/id/R.e1fdb57b1f69875daad570ee0e7e4fe2?rik=zxjYr78rUhmJPg&riu=http%3a%2f%2fwww.nielsenanimal.com%2fwp-content%2fuploads%2f2018%2f09%2fwomens-nike-av15-woven-shorts-blackwhite-shorts.jpg&ehk=yDel6AzSxQhl%2fx0oLw%2bjl2uUObEcrjJhmUdf1qAoE84%3d&risl=&pid=ImgRaw&r=0',
           bookmarked: true
        },
        {
         id: 4,
         name: 'Skirt',
         costs: 'R79.00',
         Image: 'https://th.bing.com/th/id/R.c828d4c793c8b721644752bca6f60b1a?rik=Ybx3E3iPPRd0VQ&pid=ImgRaw&r=0',
         bookmarked: true
      },
      {
         id: 5,
         name: 'throw',
         costs: 'R150.00',
         Image: 'https://th.bing.com/th/id/R.0042e645c25c2c81ce8346a38b98a899?rik=9eWlfFNWqboLfg&riu=http%3a%2f%2fbirmi.in%2fwp-content%2fuploads%2f2017%2f08%2funnamed-file.jpg&ehk=zMQqOrloJyOD7HuvgZOi%2ftWxljDAKfSjWZm7H1U6Sz0%3d&risl=&pid=ImgRaw&r=0',
         bookmarked: true
      },
      {
         id: 6,
         name: 'pillow',
         costs: 'R200.00',
         Image: 'https://th.bing.com/th/id/R.bb2ad2a4f6aa33408629c767adf88603?rik=sED4ORbh5aGGNg&pid=ImgRaw&r=0',
         bookmarked: true
      },
      {
         id: 7,
         name: 'curtains',
         costs: 'R250.00',
         Image: 'https://th.bing.com/th/id/R.66f2e25ff6137cb9f419121852bcd0d3?rik=ygKJIVKeoRVXdQ&pid=ImgRaw&r=0',
         bookmarked: true
      },
      {
         id: 8,
         name: 'washing-machine',
         costs: 'R150.00',
         Image: 'https://th.bing.com/th/id/R.5c1a98b73c0c30b3a7b3c73237538609?rik=GpnLq%2bS6EA%2fnHw&pid=ImgRaw&r=00',
         bookmarked: true
      },
      {
         id: 9,
         name: 'fridge',
         costs: 'R4000.00',
         Image: 'https://th.bing.com/th/id/R.c934c3a37759ce44de1743fae7ec89b0?rik=kB8Za0efwjPEdw&pid=ImgRaw&r=0',
         bookmarked: true
      },
      {
         id: 10,
         name: 'duvet-set',
         costs: 'R450.00',
         Image: 'https://th.bing.com/th/id/R.f308232d8efc5a2684955eee2bee3b57?rik=wzoDIkN7%2fVrC2A&pid=ImgRaw&r=0',
         bookmarked: true
      }
    ]

     /*localStorage.setItem('list',JSON.stringify(list))*/
    //  console.log('saved', JSON.parse(localStorage.getItem('list')))
     
    useEffect(()=>{
        const data = localStorage.setItem('data', JSON.stringify(Products))
        console.log('from storage', JSON.parse(localStorage.getItem('data')))
        
    },[card])
    // 1. create an array of items that you autosave to localstorage {id: '', name: '', costs: '', image: '', bookmarked: true || true. Then comment out as soon as it's saved
    // 2. on useState use items from localstorage
    // 3. create an empty array of bookmarked items and auto save to localstorage. Then comment out the code as soon as it's saved
    // 4. add a usestate of bookmarked items fetching from localtorage
    // 3. On add to bookmark, change bookmarked to true on original array, then update localstorage
    // 4. Continuing on 3, add the bookmarked item to the array of bookmarkedItems, then update localstorage. Second localstorage
   

    //step2
   const [Products] = useState(JSON.parse(localStorage.getItem('list')))

   

   const [bookmarked, setBookmarked] = useState([]); 

  

   //step 4
   // const addToB = ((bookmarked)=>{
   //   setBookmarked(Products)
   // })

  



   

  const addToCart = (products,index)=>{
    
    let bookmarked = localStorage.getItem('bookmarked')? JSON.parse(localStorage.getItem('bookmarked')): [];
    console.log(bookmarked)
    bookmarked.push(Products[index])
    console.log(bookmarked)
      console.log('we are in the cart')
      console.log(products)
      Products[index].bookmarked = true;
      console.log(Products)
      setBookmarked(bookmarked)
      localStorage.setItem('bookmarked', JSON.stringify(bookmarked))
      const add = ((name, costs, Image)=>{
         
      });
      props.add(bookmarked);
      console.log(localStorage.getItem('bookmarked'))
  setCard([...card, products]);
  };
  console.log(Products)
    return(
        <div>
            <header>
                <button>
                    Go to BookMark({card.length})
                    
                </button>
            </header>
            
            <h1>Products</h1>
            <div className="products">
               {Products.map((Product,index)=>(
                
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