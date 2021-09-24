
import "./productlist.css"
import Productcard from "./productCard"
import { useSelector } from 'react-redux'
import RemoveJS from "./removeJS"




const Productlist = () => {

const products=useSelector(state=>state.productReducer.products)
    return (

      <div  style={{display:"flex", justifyContent:'space-between' , flexWrap:"wrap"}}> 
        <div className="card" style={{width: '18rem'}}>
         {
              products.map(product=><Productcard  product={product} key={product._id} />
            )
         }
          
         
                
            </div>
            </div>
    )
}

export default Productlist