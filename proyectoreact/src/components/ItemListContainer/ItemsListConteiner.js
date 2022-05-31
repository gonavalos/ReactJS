
import '../NavBar/NavBar.css'
import { getProducts } from '../../asyncmock'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'


const ItemListConteiner = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response =>{
          setProducts(response)
        })
    
      }, [])

    return(
        <div>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListConteiner
