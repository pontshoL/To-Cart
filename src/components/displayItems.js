import React from "react";
import '../CSS/display.css'

function DisplayItems(props){
    console.log(props) 
    // const [name, setName] = useState("");
    // const [costs, setCosts] = useState("");
    // const [Image, setImage] =useState("");
    // const add = (() =>{
    //     props.add(name, costs, Image);
    // })
    return(
        <div>
            <div className="display">
          <h2>BookMarks</h2>
          {props.list.map((Products) => (
                <div key={Products.id}>
                    <div className="item-list">
                        <div>
                        <h4>{Products.name}</h4>
                        </div>
                        <div>
                        <h4>{Products.costs}</h4>
                        </div>
                        <div>
                        <img id="images" src={Products.Image}/>
                        </div>
                    </div>
                    
                </div>
             ))}
          </div>
            
        </div>
    )
}

export default DisplayItems;