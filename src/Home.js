import React, { useEffect, useState } from 'react';
import image from "./meesho.png";
import image1 from "./jacket.png";
import image2 from "./sweater.png";
import image3 from "./hoodie.png";
import image4 from "./shirt.png";
import axios from 'axios';
const Home = () => {
  const [productData,setproductData]=useState([]);
    async function getData(){
      await axios.get('https://dummyjson.com/products').then((res)=>{setproductData(res.data.products)})
  
          
    }
  
  useEffect(() =>{
    getData();                                                                          

  } ,[] );
  console.log(productData);
  return (
    <div>
      
      <div className='navbar'>
        <img src= {image} alt="an image"/>
      <div className='parent'>
      <div className='roote'>
        <p>home</p>
        </div>
        <div className='roote2'>
        <p>contact</p>
        </div>
        <div className='roote3'>
        <p>about</p>
        </div>
        <div className='roote4'>
          <p>Login</p>
        </div>
      </div>

     
    </div>
    <div>
       <div className='homepage'>
      <h1>HAPPY SHOPPING</h1>
      
     </div>
     <div className='homepage2'>
     <div className='pro1'>
     < img src ={image1} alt="an image"/>
     <h2>Jacket</h2>
     <p>price:₹1000</p>
     <button>Add to cart</button>

     </div>
     <div className='pro2'>
     < img src ={image2} alt="an image"/>
     <h2>Sweater</h2>
     <p>price:₹700</p>
     <button>Add to cart</button>
      </div>    
      <div className='pro3'>
      < img src ={image3} alt="an image"/>
     <h2>Hoodie</h2>
     <p>price:₹650</p>
     <button>Add to cart</button>
     </div>  
     <div className='pro4'>
      <img src={image4} alt='an image'/>
      <h2>Shirt</h2>
      <p>price:₹1500</p>
      <button>Add to cart</button>
     </div>
     </div>
      </div>
    </div>
  )

}
export default Home