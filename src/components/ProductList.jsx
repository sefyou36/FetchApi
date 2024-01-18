import { useState,useEffect } from 'react'
import Product from './Product';

const ProductList = () =>{

    const [myData,setMyData] = useState([]);


  const url = `https://fakestoreapi.com/products`;

  const fetchMyProduct = async () => {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        setMyData(data)
  }

  useEffect(()=>{
      fetchMyProduct()
  },[])
    return(
        <div>
                {
                    myData.map(item =>(

                        <Product key={item.id} data={item}/>
                    ))
                }

        </div>
    )
}

export default ProductList;