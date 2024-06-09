import React, { useEffect, useState } from 'react'
import Search from '../../component/search/Search';
import { ProductData } from './ProductData';
import ProductDisplaySelector from './ProductDisplaySelector';


const Products = () => {
              //prompt
              const [filt, setFilter] = useState([])
              const [search, setSearch] = useState('')
              const handlesearch=(e)=>{
                setSearch(e.target.value)
              }
              useEffect(() => {
                  setFilter(
                      ProductData.filter((productData)=>(
                          productData.product.toLowerCase().includes(search.toLowerCase())
                      ))
                  )
              }, [ProductData, search])
      
  return (
    <div>
        <Search onchangehandle={handlesearch} onchangevalue={search}/>
        <div className='grid px-2 py-2 w-full sm:grid-cols-2 justify-items-start md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-7 align'>

            {
                filt.map((productData)=>{
                    const {id, product, price, description, phone, email, image, category, brand} = productData
                    return(
                    <div key={id}>
                        <ProductDisplaySelector product={product} price={price} brand={brand} phone={phone} email={email} description={description}  image={image} category={category}/>
                    </div>
                    )

                })
            }
        </div>
    </div> 
      )
}

export default Products