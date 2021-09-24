import React from 'react'
import ContactUs from '../layouts/contactus/contactUs'
import Navbar from '../layouts/navbar/navbar'
import Product from '../layouts/products/product'
import Addproduct from '../layouts/products/addproduct'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {Button} from 'react-bootstrap'
// import Productform from '../layouts/products/productform'
import {getPRODUCT} from '../../redux/action/productaction'
import ProductList from '../layouts/products/productlist'
import Productcard from '../layouts/products/productCard'
import Productform from '../layouts/products/productform'
import RemoveJS from '../layouts/products/removeJS'




function Home() {
    const dispatch=useDispatch()
    return (
        <>
            <Navbar />
            <Button variant="primary" onClick={()=>dispatch(getPRODUCT())}>Produits</Button>{' '}
            <ProductList/>
            <Productcard/>
          
                   
            {/* <RemoveJS/> */}
            <Productform/>
            <Link to='/'>
         
         {/* <Productform/> */}
            <Product />
            </Link>
            
            
            <ContactUs />
        </>
    )
}

export default Home
