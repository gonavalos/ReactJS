
import { getProducts } from '../../asyncmock'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import '../ItemListContainer/ItemListConteiner.css'


const ItemListConteiner = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response =>{
          setProducts(response)
        })
    
      }, [])

    return(
        <div className='ItemListConteiner'>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListConteiner
