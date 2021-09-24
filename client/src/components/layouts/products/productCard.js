import { getPRODUCT } from "../../../redux/action/productaction"
import {Button} from 'react-bootstrap'
import { useDispatch ,useSelector} from "react-redux"
import React, { useEffect } from 'react';
import "./productlist.css"
import {Link} from 'react-router-dom'
import editBtn from '../../../Assets/edit.png'
import { editProduct } from '../../../redux/action/productaction'
import Hand from '../../../Assets/hand.jpg'
import RemoveJS from "./remove";
import AddProduct from "./addproduct";

const Productcard=({product})=>{
    const dispatch = useDispatch()
    const edit=useSelector(state=>state.productReducer.edit)
      const editproduct=useSelector(state=>state.productReducer.product)
   
    return (
        <div>
      <div className="card" style={{width: '18rem'}}>
      <img className="card-img-top" src={Hand} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{product && product.title}</h5>
        <p className="card-text">{product && product.description}.</p>
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      
      </div>
    </div>
    <RemoveJS/>
    <AddProduct/>
    </div>
    );
}
/* </div>
    //        <div className="cards">
    //     <div className="card">
    //       <div className="card__image-holder">
    //         <img className="card__image" src= {product && product.imageURL} alt="wave" />
    //         {/* <img className="card__image" src=`"../../../" + ${product && product.imageURL}` alt="wave" /> */
    //       </div>
    //       <div className="card-title">
    //         <Link to='/' className="toggle-info btn">
    //           <span className="left" />
    //           <span className="right" />
    //         </Link>
    //         <h2>
    //         {product && product.title} 
    //           {/* <small>{product && product.price}</small> */}
    //         </h2>
    //       </div>
    //       <div className="card-flap flap1">
    //         <div className="card-description">
    //          {product && product.description}hello
    //         </div>
                
    //         <div className="card-flap flap2">
    //           <div className="card-actions">
    //           
               
             
              
                
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    // </div>
   /* <Button variant="primary" onClick={()=>dispatch(getPRODUCT())}>Produits</Button>{' '} */
        
    

export default Productcard