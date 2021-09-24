
import React,{useEffect, useState}  from 'react'
import {Button,Modal,Form} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import AddBtn from '../../../Assets/add-to-basket.svg'
import Edit from '../../../Assets/edit.svg'
import Addfile from '../../../Assets/up.svg'
import './addproduct.scss'
import { addProduct ,editProduct} from '../../../redux/action/productaction'






const AddProduct=() =>{

  // const product=useSelector(state=>state.productReducer.product)
   const [product, setProduct] = useState("title","description","imageURL")
    const [show, setShow] = useState(false);
    const edit=useSelector(state=>state.productReducer.edit)
    const editproduct=useSelector(state=>state.productReducer.product)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [description, setdescription] = useState('')
    
    const [title,setTitle]=useState('')
    const [imageURL, setImageURL] = useState('')
      const handleTITLE=(e)=>{
        setTitle(e.target.value)
    }
    const handleDESC=(e)=>{
      setdescription(e.target.value)
  }
  const handleIMG=(e)=>{
    setImageURL(e.target.value)
}
    const dispatch = useDispatch()
   

    const handleImageSelect = (e) => {
      setImageURL(URL.createObjectURL(e.target.files[0]))
    }


    useEffect(()=>{
      edit ? setProduct(editproduct):setProduct({title:"",description:"",imageURL:""})
  }
  ,[edit,editProduct])
  
 
const sendIMG=()=>{
  let formData=new FormData()
  formData.append("key","value")

 fetch('/uploads',{
 method:'post',
 body:FormData
 }
 ).then((res)=>res.text()).then((resBody)=>{
   console.log(resBody)
 });
};

      return (
        <>
          
          <img src={Addfile} alt="add" className="add-btn" onClick={handleShow}/>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Form.Control type="text"
                    placeholder="Enter your product title ..."
                    name="title"
                    value={title}
                    // defaultvalue={title}
                   onChange={handleTITLE}
                  // onchange={ handleTITLE}
                />
            {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
            <Form.Control type="text"
                    placeholder="Enter your product description ..."
                    name="description"
                   value={description}
                    onChange={handleDESC}
                />
                <Form.Control type="file"
                    placeholder="Enter your product picture ..."
                    name="picture"
                    src={imageURL}
                    
                    onChange={handleIMG}
               />
                 {/* <input type="file"  onChange={handleImageSelect}/> */}
              
                {/* <button onClick={sendIMG}  onClick={()=>{dispatch(editProduct(editproduct._id,product)) }}>edit</button> */} 
                
            <Modal.Footer>
              
               {/* <img src={Addfile} alt="add" className="add-btn" onclick={()=>dispatch()}onClick={handleClose}/> */}
              
              <img src={Edit} alt="edit" className="edit-btn" onClick={handleClose} />

{
                 edit ?
                  <img src={Edit} alt="edit" className="edit-btn" 
                 onClick={()=>{dispatch(editProduct(editproduct._id,product)) }} /> :
                 <img src={Addfile} alt="add" className="add-btn" onClick={sendIMG}
                 onClick={()=>{dispatch(addProduct({
                   title,description,imageURL
                 }))}}
                 /> }
             
            </Modal.Footer>
          </Modal>
        </>
      );
    }
    
    
  
  


export default AddProduct